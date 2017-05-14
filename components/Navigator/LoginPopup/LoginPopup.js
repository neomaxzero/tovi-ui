import React, { Component } from 'react';
import FormPopup from '~/components/shared/FormPopup/FormPopup';
import { OwnLoginPhrase } from './LoginPopupSc';
import SocialLogin from './SocialLogin';
import LoginForm from './LoginForm';
import NewAccount from './NewAccount';

class LoginPopup extends Component {  
  render() {
    const { setLogin, toggleLogin } = this.props;

    return(
      <FormPopup toggle={toggleLogin}>
        {(lockPopup) => (
          <div>
            <SocialLogin onLogin={setLogin}/>
            <OwnLoginPhrase>o inicia sesión con tu correo electrónico </OwnLoginPhrase>
            <LoginForm  onLogin={setLogin} lockPopup={lockPopup} />
            <NewAccount />
          </div>
        )}          
      </FormPopup>
    )
  }
}

export default LoginPopup;