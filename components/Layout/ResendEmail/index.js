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

const types = {
  FORM: 'FORM',
  SUCCESS: 'SUCCESS',
}

export default class ResendEmail extends PureComponent {
  state = {
    message: '',
    loading: false,
    type: types.FORM,    
  }

  sendEmail = () => {
    userService.resendEmail(this.props.userId)
     .then(() => this.setState({ type: types.SUCCESS }))
     .catch(err => {
        console.log('ERROR', err.response);
        this.setState({
          message: 'Error al solicitar el email.',
          loading: false,
        })      
      })
  }

  requestEmail = (ev) => {   
    const { loading } = this.state;
    if (loading) return;
    if (ev) ev.preventDefault();

    this.sendEmail();      

    this.setState({
      loading: true,
    });
  }

  pickPopup = () => {
    const { message, loading } = this.state;
    const { activateClose, title, children } = this.props;

    switch (this.state.type) {
      case types.FORM:
        return (
          <Popup
            title={title}
            icon={{name: 'times-circle-o', color: error}}
            onClickOutside={activateClose}
          >
            <MainContainer>
              <MessageContainer>           
                { children }                   
              </MessageContainer>
              <ButtonContainer> 
                { message && <ErrorMessage>{message}</ErrorMessage>}
                <FormButton onClick={this.requestEmail} name={'Reenviar e-mail'} loading={loading} secundary/>
              </ButtonContainer>
            </MainContainer>
          </Popup>           
        )
      case types.SUCCESS:
        return (
         <Popup
            title={'E-mail Enviado'}
            icon={{name: 'check-circle-o',color: primary}}
            onClickOutside={activateClose}
          >
            <MainContainer>
              <MessageContainer>              
                <Phrase> Hemos enviado un nuevo e-mail a tu correo electrónico. </Phrase>        
                <Phrase> Sigue las instrucciones contenidas en él para poder activar tu cuenta. </Phrase>  
              </MessageContainer>
              <ButtonContainer> 
                <FormButton onClick={activateClose} name={'OK'} />
              </ButtonContainer>
            </MainContainer>
          </Popup>    
        )
    }
  }

  render() {
    return this.pickPopup();
  }
}