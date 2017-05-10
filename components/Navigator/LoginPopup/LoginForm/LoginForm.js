import React, { Component } from 'react';
import { Field, FormLogin, ErrorMessage } from './LoginFormSc';
import FormButton from '~/components/shared/FormButton/';
import OptionsLogin from './OptionsLogin';
import Validators from '~/components/shared/Validators';
import { login } from '~/services/user';

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
      .then((response) =>  console.log('response on login', response) )
      .catch(err => this.setState({
        message: err,
        loading: false,
      }))
  }
  onSubmit = (ev) => {
    if (loading) return;
    ev.preventDefault();
    let message, validForm, loading;
    if(this.validateFields()) { 
      message = '';
      console.log('HACIENDO LOGIN!!!') ;
      this.doLogin();
      validForm = true;
      loading = true;
      this.props.lockPopup();
    } else {
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

  render() {
    const { message, user, pass, validForm, loading } = this.state;
    return(
      <FormLogin onSubmit={this.onSubmit}>
        <Field 
          type="text" 
          name="user" 
          placeholder="Correo Electrónico" 
          onChange={this.onChange} 
          value={user} 
          valid={validForm}
        />
        <Field 
          type="password" 
          name="pass" 
          placeholder="Contraseña" 
          onChange={this.onChange} 
          value={pass} 
          valid={validForm}
        />
        <OptionsLogin />        
        { message && <ErrorMessage>{message}</ErrorMessage>}
        <FormButton name="Iniciar sesión" onClick={this.onSubmit} loading={loading}/>
      </FormLogin>
    );
  }
}