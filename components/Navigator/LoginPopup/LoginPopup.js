import React, { Component } from 'react';
import Background from '~/components/shared/Background';
import { PopupContainer, OwnLoginPhrase } from './LoginPopupSc';
import SocialLogin from './SocialLogin';
import LoginForm from './LoginForm';

class LoginPopup extends Component {
  toggleLogin = () => {
    console.log('TOGGLING!')
    this.props.toggleLogin();
  }

  render() {
    console.log(Background)
    return(
      <Background onClickOutside={this.toggleLogin}>
        <PopupContainer>
          <SocialLogin />
          <OwnLoginPhrase>o inicia sesión con tu correo electrónico </OwnLoginPhrase>
          <LoginForm />
          {/*<NewAccount />*/}
          <p>¿No tienes cuenta?</p>
        </PopupContainer>
      </Background>
    )
  }
}

export default LoginPopup;