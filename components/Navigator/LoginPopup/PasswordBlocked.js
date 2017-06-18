import React, { Component } from 'react';
import ResendPopup from '~/components/Layout/ResendEmail';
import { user as userService } from '~/services/user';
import { Phrase } from '~/components/shared/Message/styled';

export default class PasswordBlocked extends Component {
  sendEmail = () => {
    const { user } = this.props;
    return userService.resendPasswordEmail(this.props.user);
  }

  render() {
    const { activateClose } = this.props;
    return (
      <ResendPopup 
          service={this.sendEmail}
          activateClose={activateClose}
          title={'Contraseña bloqueada'}
          nameButton={'Enviar e-mail'}
      >
        <Phrase> Por razones de seguridad tu contraseña ha sido bloqueada.</Phrase>        
        <Phrase> Necesitamos enviarte un e-mail para que puedas establecer</Phrase>        
        <Phrase> una nueva contraseña.</Phrase>          
      </ResendPopup>
    )
  }
}
          