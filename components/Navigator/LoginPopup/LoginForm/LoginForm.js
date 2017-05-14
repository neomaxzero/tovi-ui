import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { ErrorMessage } from './LoginFormSc';
import { Field, Form } from '~/components/shared/FormPopup/styled';
import FormButton from '~/components/shared/FormButton/';
import OptionsLogin from './OptionsLogin';
import Validators from '~/components/shared/Validators';
import { login, user } from '~/services/user';
import { saveToken } from '~/utils/token';
import { PROVIDERS } from '~/components/Orphan/Login/constants';

export default class LoginForm extends Component {
  state = {
    user: '',
    pass: '',
    message: '',
    validForm: true,
    loading: false,
  }

  validateFields = () => {
    const { user, pass} = this.state;
    if (!Validators.email(user) || !pass) return false;   

    return true;
  }

  doLogin = () => {
    const { user, pass } = this.state;
    login({ Email: user, Password: pass, Provider: 'local'})
      .then((response) =>  {        
        saveToken(response)
        // const id = response.data.id;
        // return user.get(id);
        return Promise.resolve();
      })
      .then((userInfo) => {
        this.props.onLogin({
          first_name: 'Anonymous',
          picture: {
            data: {
              url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/17992211_10155647473106416_5695453492870874090_n.jpg?oh=15bc84ee1c3d21f3f9492d8d4e5ba545&oe=59C116B4',
            }
          }
        }, PROVIDERS.LOCAL);
      })
      .catch(err => this.setState({
        message: err,
        loading: false,
      }))
  }

  onSubmit = (ev) => {
    if (loading) return;

    if (ev) ev.preventDefault();
    let message, validForm, loading, pass;
    if(this.validateFields()) { 
      message = '';
      this.doLogin();
      validForm = true;
      loading = true;
      this.props.lockPopup();
    } else {
      pass = '';
      message = 'Email o Password incorrectos';
      validForm = false;
      loading = false;
    }

    this.setState({
      message,
      validForm,
      loading,
    });
  }

  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    })    
  }

  handleKeys = (ev) => {
    if(ev.key === 'Enter')
      return this.onSubmit();
  }

  render() {
    const { message, user, pass, validForm, loading } = this.state;
    return(
      <Form onSubmit={this.onSubmit}>
        <Field 
          type="text" 
          name="user" 
          placeholder="Correo Electrónico" 
          onChange={this.onChange} 
          value={user} 
          valid={validForm}
          onKeyPress={this.handleKeys}
        />
        <Field 
          type="password" 
          name="pass" 
          placeholder="Contraseña" 
          onChange={this.onChange} 
          value={pass} 
          valid={validForm}
          onKeyPress={this.handleKeys}          
        />
        <OptionsLogin />        
        { message && <ErrorMessage>{message}</ErrorMessage>}
        <FormButton name="Iniciar sesión" onClick={this.onSubmit} loading={loading}/>
      </Form>
    );
  }
}