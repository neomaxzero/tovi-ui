import React, { Component } from 'react';
import Background from '~/components/shared/Background';
import { PopupContainer, OwnLoginPhrase } from './LoginPopupSc';
import SocialLogin from './SocialLogin';
import LoginForm from './LoginForm';
import NewAccount from './NewAccount';

class LoginPopup extends Component {
  toggleLogin = () => {
    this.props.toggleLogin();
  }

  render() {
    return(
      <Background onClickOutside={this.toggleLogin}>
        <PopupContainer>
          <SocialLogin />
          <OwnLoginPhrase>o inicia sesión con tu correo electrónico </OwnLoginPhrase>
          <LoginForm />
          <NewAccount />
        </PopupContainer>
      </Background>
    )
  }
}

export default LoginPopup;