import React, { Component } from 'react';
import ResendPopup from '~/components/Layout/ResendEmail';
import { user as userService } from '~/services/user';
import { Phrase } from '~/components/shared/Message/styled';

export default class InvalidLinkPopup extends Component {
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
        title={'Link Invalido'}
        nameButton={'Enviar e-mail'}
      >
        <Phrase> El link de activación no se encuentra activo.</Phrase>
        <Phrase> Deseas que te enviemos un nuevo e-mail de restauracion? </Phrase>
      </ResendPopup>
    );
  }
}
