import React, { Component } from 'react';
import ResendPopup from '~/components/Layout/ResendEmail';
import { user as userService } from '~/services/user';
import { Phrase } from '~/components/shared/Message/styled';

export default class ResendPopupActivate extends Component {
  sendEmail = () => {
    const { userId } = this.props;
    return userService.resendEmail(this.props.userId);
  }

  render() {
    const { activateClose } = this.props;
    return (
      <ResendPopup 
          service={this.sendEmail}
          activateClose={activateClose}
          title={'Link inválido'}
        >
          <Phrase> El link de activación no se encuentra activo.</Phrase>        
          <Phrase> Deseas que te enviemos un nuevo e-mail de activación? </Phrase>  
        </ResendPopup>
    )
  }
}
