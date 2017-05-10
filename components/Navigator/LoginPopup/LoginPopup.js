import React, { Component } from 'react';
import Background from '~/components/shared/Background';
import { PopupContainer, OwnLoginPhrase } from './LoginPopupSc';
import SocialLogin from './SocialLogin';
import LoginForm from './LoginForm';
import NewAccount from './NewAccount';

class LoginPopup extends Component {
  state = {
    locked : false,
  }
  
  toggleLogin = () => {
    if(this.state.locked) return;

    this.props.toggleLogin();
  }

  lockPopup = () => {
    this.setState({
      locked: true,
    });
  }

  render() {
    const { setLogin } = this.props;

    return(
      <Background onClickOutside={this.toggleLogin}>
        <PopupContainer>
          <SocialLogin onLogin={setLogin}/>
          <OwnLoginPhrase>o inicia sesión con tu correo electrónico </OwnLoginPhrase>
          <LoginForm  onLogin={setLogin} lockPopup={this.lockPopup} />
          <NewAccount />
        </PopupContainer>
      </Background>
    )
  }
}

export default LoginPopup;