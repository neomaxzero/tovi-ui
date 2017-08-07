import React, { Component } from 'react';
import ResendPopup from '~/components/Layout/ResendEmail';
import { user as userService } from '~/services/user';
import { Phrase } from '~/components/shared/Message/styled';

// TODO: Build an i18n api.
const i18n = {
  TITLE: "Contraseña Tovi Bloqueada",
  FB_PHRASE_ONE:"Si bien puedes continuar iniciando sesión con tu usuario y contraseña de Facebook, la contraseña asociada a Tovi se encuentra bloqueada.",
  FB_PRASE_TWO:"Te recomendamos que resetees tu contraseña de Tovi para que puedas iniciar sesión sin inconvenientes por éste medio también.",
  TOVI_RESEND_BUTTON: "Restaurar Contraseña"
}
/**
 * This class is for Blocked users with Facebook,
 * TODO: We may need to use HOC for all popups
 */
export default class PasswordBlockedWithFacebook extends Component {
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
          title={i18n.TITLE}
          nameButton={i18n.TOVI_RESEND_BUTTON}
      >
        <Phrase>{i18n.FB_PHRASE_ONE}</Phrase>        
        <Phrase> {i18n.FB_PRASE_TWO}</Phrase>   
      </ResendPopup>
    )
  }
}
