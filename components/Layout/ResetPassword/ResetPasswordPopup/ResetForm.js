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

import SomethingWrongPopup from '../../SomethingWrong';

import { MainContainer, ButtonContainer, Phrase, MessageContainer } from '~/components/shared/Message/styled';

import { user as userService } from '~/services/user';

const types = {
  FORM: 'FORM',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

export default class ResetForm extends PureComponent {
  state = {
    user: '',
    pass: '',
    repeatPass: '',
    validForm: true,
    message: '',
    loading: false,
    type: types.FORM,
    code: this.props.code,
  }

  validateFields = () => {
    const { user, pass, repeatPass} = this.state;
    if (!Validators.email(user)) 
      return {
        result: false,
        message: 'Correo electrónico incorrecto'
      };   
    if (!user || !pass || !repeatPass) 
      return {
        result: false,
        message: 'No se permiten campos en blanco'
      }
    if (pass !== repeatPass)
      return {
        result: false,
        message: 'Las contraseñas deben coincidir'
      };   

    return { result: true };
  }

  doReset = () => {
    const { user, pass, code } = this.state;
    const body = {
      Password: pass,
      PasswordRepetir: pass,
      Token: code,
      Email: user,
    }

    userService.resetPassword(body)
     .then((response) =>  {       
        this.setState({
          type: types.SUCCESS,
        });
      })
      .catch(err => {
        console.log('ERROR', err.response)
        this.setState({
          type: types.ERROR,
        });      
      }
        
      )
  }

  onSubmit = (ev) => {
    if (loading) return;

    if (ev) ev.preventDefault();

    let message, validForm, loading, pass, repeatPass;
    const validation = this.validateFields();
    if (validation.result) { 
      message = '';
      this.doReset();
      validForm = true;
      loading = true;
      // this.props.lockPopup();
    } else {
      pass = '';
      repeatPass = '';
      message = validation.message;
      validForm = false;
      loading = false;
    }

    this.setState({
      pass,
      repeatPass,
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

  closeAndOpenLogin = () => {    
    this.props.close();
    this.props.toggleLogin();
  }

  pickPopup = () => {
    const { user, pass, repeatPass, validForm, message, loading } = this.state;
    const { close } = this.props;

    switch (this.state.type) {
      case types.FORM:
        return (
            <Popup
              title={'Elige una contraseña'}
              onClickOutside={close}
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
                    placeholder="Contraseña nueva" 
                    onChange={this.onChange} 
                    value={pass} 
                    valid={validForm}
                    onKeyPress={this.handleKeys}          
                  />
                  <Field 
                    type="password" 
                    name="repeatPass" 
                    placeholder="Repite la contraseña nueva" 
                    onChange={this.onChange} 
                    value={repeatPass} 
                    valid={validForm}
                    onKeyPress={this.handleKeys}          
                  />                  
                  { message && <ErrorMessage>{message}</ErrorMessage>}
                  <FormButton name="Activar" onClick={this.onSubmit} loading={loading}/>
                </Form>
              </MainContainer>
            </Popup>
        )
      case types.SUCCESS:
        return (
          <Popup
            title={'Contraseña Modificada!'}
            icon={{name: 'check-circle-o',color: primary}}
            onClickOutside={close}
          >
            <MainContainer>
              <MessageContainer>              
                <Phrase> Tu nueva contraseña ha sido guardad exitosamente. Ahora puedes iniciar sesión con ella.</Phrase>        
              </MessageContainer>
              <ButtonContainer> 
                <FormButton onClick={this.closeAndOpenLogin} name={'Iniciar Sesión'} />
              </ButtonContainer>
            </MainContainer>
          </Popup>
        )      
      case types.ERROR: 
         return (<SomethingWrongPopup close={close} />)
    }
  }

  render() {
    return this.pickPopup();
  }
}