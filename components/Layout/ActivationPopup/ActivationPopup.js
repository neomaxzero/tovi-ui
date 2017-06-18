import React, { PureComponent } from 'react';
import Popup from '~/components/shared/Popup';
import { Field, Form } from '~/components/shared/FormPopup/styled';
import FormButton from '~/components/shared/FormButton';
import { primary, error } from '~/components/shared/MainColors';
import Validators from '~/components/shared/Validators';
import { ErrorMessage } from'~/components/shared/FormPopup/styled';
import { OptionsContainer, Linki } from '~/components/shared/FormPopup/styled';
import { saveToken } from '~/utils/token';
import { PROVIDERS } from '~/components/Orphan/Login/constants';
import errorCodes from './errorCodes';
import ResendPopup from './ResendPopup';
import SomethingWrongPopup from '../SomethingWrong';

import { MainContainer, ButtonContainer, Phrase, MessageContainer } from '~/components/shared/Message/styled';

import { login  , user as userService } from '~/services/user';

const types = {
  FORM: 'FORM',
  SUCCESS: 'SUCCESS',
  ALREADY_ACTIVATED: 'ALREADY_ACTIVATED',
  INVALID_LINK: 'INVALID_LINK',
  ERROR: 'ERROR',
}

export default class ActivationPopup extends PureComponent {
  state = {
    user: '',
    pass: '',
    validForm: true,
    message: '',
    loading: false,
    type: types.FORM,
    code: this.props.code,
  }

  validateFields = () => {
    const { user, pass} = this.state;
    if (!Validators.email(user) || !pass) return false;   

    return true;
  }

  handleError = (err) => {
     const { errorCode } = err.response.data;
      debugger;
      switch (errorCode) {
        case errorCodes.ALREADY_ACTIVATED:
          return this.setState({ type: types.ALREADY_ACTIVATED });
        case errorCodes.INVALID_LINK:
          return this.setState({ type: types.INVALID_LINK });
        case errorCodes.ACTIVATE_FAIL:
          return this.setState({ type: types.ERROR });
        default:
          return this.setState({ 
            message: 'Email o Password incorrectos',
            loading: false,
          });
      }      
  }
  doActivate = () => {
    const { user, pass, code } = this.state;
    let userLogin;

    login({ Email: user, Password: pass, Provider: 'local'})
     .then((response) =>  {       
        saveToken(response); 
        const id = response.data.usuarioId;
        this.setState({
          userId: id,
        });

        return userService.get(id);
      })
      .then((userInfo) => {
        userLogin = {
          first_name: userInfo.data.Nombre,
          verified: true,
          picture: {
            data: {
              url: 'https://cdn1.iconfinder.com/data/icons/circle-outlines/512/User_Account_Avatar_Person_Profile_Login_Human-512.png',
            }
          }
        };
        return userService.activate(this.props.code);
      })
      .then(() => {
        this.props.setLogin(userLogin, PROVIDERS.LOCAL);
        
        this.setState({
          type: types.SUCCESS,
        })
      })
      .catch(err => this.handleError(err))
  }

  onSubmit = (ev) => {
    if (loading) return;

    if (ev) ev.preventDefault();

    let message, validForm, loading, pass;
    if(this.validateFields()) { 
      message = '';
      this.doActivate();
      validForm = true;
      loading = true;
      // this.props.lockPopup();
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

  handleKeys = (ev) => {
    if(ev.key === 'Enter')
      return this.onSubmit();
  }

  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    })    
  }

  openForgot = () => {
    this.props.activateClose();
    this.props.showRequestResetPasswordPopup();
  }

  closeAndOpenLogin = () => {    
    this.props.activateClose();
    this.props.toggleLogin();
  }
  pickPopup = () => {
    const { user, pass, validForm, message, loading } = this.state;
    const { activateClose } = this.props;

    switch (this.state.type) {
      case types.FORM:
        return (
            <Popup
              title={'Activa tu cuenta'}
              onClickOutside={activateClose}
            >
              <MainContainer>
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
                  <OptionsContainer>
                    <div></div>
                    <Linki onClick={this.openForgot}>
                      Olvidé la contraseña
                    </Linki>
                  </OptionsContainer>
                  { message && <ErrorMessage>{message}</ErrorMessage>}
                  <FormButton name="Activar" onClick={this.onSubmit} loading={loading}/>
                </Form>
              </MainContainer>
            </Popup>
        )
      case types.SUCCESS:
        return (
          <Popup
            title={'¡Cuenta activada!'}
            icon={{name: 'check-circle-o',color: primary}}
            onClickOutside={activateClose}
          >
            <MainContainer>
              <MessageContainer>              
                <Phrase> Muchas gracias por activar tu cuenta.</Phrase>        
                <Phrase> Ya puedes comenzar a utilizar Tovi.</Phrase>  
              </MessageContainer>
              <ButtonContainer> 
                <FormButton onClick={activateClose} name={'Empezar'} />
              </ButtonContainer>
            </MainContainer>
          </Popup>
        )
      case types.ALREADY_ACTIVATED:
        return (
          <Popup
            title={'Cuenta ya activada'}
            icon={{name: 'check-circle-o',color: primary}}
            onClickOutside={activateClose}
          >
            <MainContainer>
              <MessageContainer>              
                <Phrase> La cuenta ya ha sido previamente activada.</Phrase>        
                <Phrase> Solo debes iniciar sesión.</Phrase>  
              </MessageContainer>
              <ButtonContainer> 
                <FormButton onClick={this.closeAndOpenLogin} name={'Iniciar sesión'} />
              </ButtonContainer>
            </MainContainer>
          </Popup>
        )
      case types.INVALID_LINK:
        return (
          <ResendPopup 
            userId={this.state.userId}
            activateClose={activateClose}
          />
        );
      case types.ERROR: 
         return (<SomethingWrongPopup close={activateClose} />)
    }
  }

  render() {
    return this.pickPopup();
  }
}