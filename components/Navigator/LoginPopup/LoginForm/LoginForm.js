import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { ErrorMessage } from './LoginFormSc';
import { Field, Form } from '~/components/shared/FormPopup/styled';
import FormButton from '~/components/shared/FormButton/';
import OptionsLogin from './OptionsLogin';
import Validators from '~/components/shared/Validators';
import { login, user as userService } from '~/services/user';
import { saveToken } from '~/utils/token';
import CookiesUtils from '~/utils/cookies';
import { PROVIDERS } from '~/components/Orphan/Login/constants';
import ERROR_CODES from './errorCodes';

export default class LoginForm extends Component {
  state = {
    user: '',
    pass: '',
    message: '',
    validForm: true,
    loading: false,
    rememberme: false
  }

  validateFields = () => {
    const { user, pass } = this.state;
    if (!Validators.email(user) || !pass) return false;   

    return true;
  }

  doLogin = () => {
    const { user, pass } = this.state;
    let id;
    //We may need to migrate to sagas this call
    login({ Email: user, Password: pass, Provider: 'local'})
      .then((response) =>  {        
        saveToken(response); 
        id = response.data.usuarioId;
        CookiesUtils.set('id', id, 1);
        return userService.get(id);
      })
      .then((userInfo) => {
        if (!userInfo.data.Verificado) {
          return this.props.notActivated(id);
        }
        this.props.onLogin({
          first_name: userInfo.data.Nombre,
          verified: userInfo.data.Verificado,
          picture: {
            data: {
              url: 'https://cdn1.iconfinder.com/data/icons/circle-outlines/512/User_Account_Avatar_Person_Profile_Login_Human-512.png',
            }
          },
          rememberme: this.state.rememberme
        }, PROVIDERS.LOCAL);
        this.props.toggleLogin();
      })
      .catch(err => {
        console.log(err.response);
        const code = err.response.data.errorCode;
        if (code == ERROR_CODES.PASSWORD_BLOCKED)        
          return this.props.showBlocked(this.state.user);
        
        if (code == ERROR_CODES.FIRST_TIME)
          return this.props.showResetForm(this.state.user);

        this.setState({
          message: 'Email o Password incorrectos',
          loading: false,
        });
        //Unlock popup
        this.props.lockPopup();
        }
      )
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

  /**
   * Only for rememberme functionality
   */
  onRememberMe = (ev) => {
    this.setState({
      rememberme: ev.target.checked,
    })    
  }

  handleKeys = (ev) => {
    if(ev.key === 'Enter')
      return this.onSubmit();
  }

  render() {
    const { message, user, pass, validForm, loading, rememberme } = this.state;
    const { forgot } = this.props;
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
        <OptionsLogin forgot={forgot} rememberme={rememberme} onChange={this.onRememberMe}/>        
        { message && <ErrorMessage>{message}</ErrorMessage>}
        <FormButton name="Iniciar sesión" onClick={this.onSubmit} loading={loading}/>
      </Form>
    );
  }
}