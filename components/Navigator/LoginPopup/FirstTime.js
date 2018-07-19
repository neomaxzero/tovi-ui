import React, { Component } from 'react';
import ResendPopup from '~/components/Layout/ResendEmail';
import { user as userService } from '~/services/user';
import { Phrase } from '~/components/shared/Message/styled';

export default class FirstTime extends Component {
  sendEmail = () => {
    const { user } = this.props;
    return userService.resendPasswordEmail(this.props.user);
  };

  render() {
    const { activateClose } = this.props;
    return (
      <ResendPopup
        service={this.sendEmail}
        activateClose={activateClose}
        title={'Primer Inicio con email'}
        nameButton={'Enviar e-mail'}
      >
        <Phrase> Esta es la primera vez que inicia sesión directamente con su correo.</Phrase>
        <Phrase> Le enviaremos un mail para que setee su contraseña.</Phrase>
      </ResendPopup>
    );
  }
}
