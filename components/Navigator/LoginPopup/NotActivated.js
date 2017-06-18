import React, { Component } from 'react';
import ResendPopup from '~/components/Layout/ResendEmail';
import { user as userService } from '~/services/user';
import { Phrase } from '~/components/shared/Message/styled';

export default class NotActivated extends Component {
  sendEmail = () => {
    const { userId } = this.props;
    return userService.resendEmail(userId);
  }

  render() {
    const { activateClose } = this.props;
    return (
      <ResendPopup 
          service={this.sendEmail}
          activateClose={activateClose}
          title={'Cuenta no activada'}
          nameButton={'Enviar e-mail'}
      >
        <Phrase> Aún no has activado tu cuenta.</Phrase>        
        <Phrase> Revisa tu correo electrónico y sigue las instrucciones que te hemos enviado.</Phrase>  
        <Phrase> No olvides buscar en correos no deseados.</Phrase>            
      </ResendPopup>
    )
  }
}
          