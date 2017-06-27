import React, { PureComponent } from 'react';
import Popup from '~/components/shared/Popup';
import { Field, Form } from '~/components/shared/FormPopup/styled';
import FormButton from '~/components/shared/FormButton';
import { error, primary } from '~/components/shared/MainColors';
import Validators from '~/components/shared/Validators';
import { ErrorMessage } from'~/components/shared/FormPopup/styled';
import { OptionsContainer, Linki } from '~/components/shared/FormPopup/styled';
import { saveToken } from '~/utils/token';
import { PROVIDERS } from '~/components/Orphan/Login/constants';

import { MainContainer, ButtonContainer, Phrase, MessageContainer } from '~/components/shared/Message/styled';

import { user as userService } from '~/services/user';
import SomethingWrongPopup from '../../SomethingWrong';

const types = {
  FORM: 'FORM',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

export default class RequestResetPopup extends PureComponent {
  static defaultProps = {
    user: '',
  }
  
  state = {
    user: this.props.user,
    loading: false,
    validForm: true,
    type: types.FORM,    
  }

  sendRequest = () => {
    userService.resendPasswordEmail(this.state.user)
     .then(() => this.setState({ type: types.SUCCESS }))
     .catch(err => {
        console.log('ERROR', err.response);
        this.setState({
          message: 'Error al solicitar el email.',
          loading: false,
        })      
      })
  }

  handleKeys = (ev) => {
    if(ev.key === 'Enter')
      return this.onSubmit();
  }

  requestReset = (ev) => {                      
    if (this.state.loading) return;
    if (ev) ev.preventDefault();

    this.sendRequest();      

    this.setState({
      loading: true,
    });
  }

  validateFields = () => {
    const { user } = this.state;
    if (!Validators.email(user)) 
      return false     
    
    return true;
  }

  onSubmit = (ev) => {
    if (this.state.loading) return;

    if (ev) ev.preventDefault();

    let message, validForm, loading;
    if(this.validateFields()) { 
      message = '';
      this.sendRequest();
      validForm = true;
      loading = true;
      // this.props.lockPopup();
    } else {
      message = 'Formato de email invalido';
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

  pickPopup = () => {
    const { loading, user, validForm, message } = this.state;
    const { close, children } = this.props;

    switch (this.state.type) {
      case types.FORM:
        return (
          <Popup
            title='Olvidé la constraseña'
            onClickOutside={close}
          >
            <MainContainer>
                <MessageContainer>
                  <Phrase> Ingresa tu correo electrónico para que podamos enviarte un mail para restablecer tu contraseña. </Phrase>        
                </MessageContainer>
              
                <Form onSubmit={this.onSubmit}>                  
                  <Field 
                    type="text" 
                    name="user" 
                    placeholder="Correo electrónico" 
                    onChange={this.onChange} 
                    value={user} 
                    valid={validForm}
                    onKeyPress={this.handleKeys}
                    oStyle={'margin-bottom: 1.5em;'}                    
                  />
                  { message && <ErrorMessage>{message}</ErrorMessage>}
                  <FormButton 
                    name="Restaurar contraseña" 
                    onClick={this.onSubmit} 
                    loading={loading}
                  />
                </Form>
            </MainContainer>
          </Popup>           
        )
      case types.SUCCESS:
        return (
         <Popup
            title={'Mail enviado'}
            icon={{name: 'check-circle-o',color: primary}}
            onClickOutside={close}
          >
            <MainContainer>
              <MessageContainer>              
                <Phrase> Hemos enviado un nuevo e-mail a tu correo electrónico. </Phrase>        
                <Phrase> Sigue las instrucciones contenidas en él para que puedas establecer una nueva contraseña </Phrase>  
              </MessageContainer>
              <ButtonContainer> 
                <FormButton onClick={close} name={'Cerrar'} />
              </ButtonContainer>
            </MainContainer>
          </Popup>    
        )
      case types.ERROR:
        return (<SomethingWrongPopup close={close}/>)
    }
  }

  render() {
    return this.pickPopup();
  }
}