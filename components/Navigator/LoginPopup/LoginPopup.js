import React, { Component } from 'react';
import FormPopup from '~/components/shared/FormPopup/FormPopup';
import { OwnLoginPhrase } from './LoginPopupSc';
import SocialLogin from './SocialLogin';
import LoginForm from './LoginForm';
import NewAccount from './NewAccount';
import ResendPopup from '~/components/Layout/ResendEmail';
import { Phrase } from '~/components/shared/Message/styled';

const types = {
  FORM: 'FORM',
  NOT_ACTIVATED: 'NOT_ACTIVATED',
}

class LoginPopup extends Component {  
  state = {
    type: types.FORM,
  }

  openSignUp = () => {
    this.props.toggleLogin();
    this.props.toggleSignup();
  }

  notActivated = () => {
    this.setState({ type: types.NOT_ACTIVATED });
  }

  pickPopup = () => {
    const { setLogin, toggleLogin } = this.props;
    
    switch (this.state.type) {      
      case types.FORM:
        return (
        <FormPopup toggle={toggleLogin}>
          {(lockPopup) => (
            <div>
              <SocialLogin onLogin={setLogin}/>
              <OwnLoginPhrase>o inicia sesión con tu correo electrónico </OwnLoginPhrase>
              <LoginForm  notActivated={this.notActivated} onLogin={setLogin} lockPopup={lockPopup} toggleLogin={toggleLogin} />
              <NewAccount openSignUp={this.openSignUp}/>
            </div>
          )}          
        </FormPopup>);
      case types.NOT_ACTIVATED:
        return (
          <ResendPopup 
            activateClose={toggleLogin}
            title={'Cuenta no activada'}
          >
            <Phrase> Aún no has activado tu cuenta.</Phrase>        
            <Phrase> Revisa tu correo electrónico y sigue las instrucciones que te hemos enviado.</Phrase>  
            <Phrase> No olvides buscar en correos no deseados.</Phrase>              
          </ResendPopup>
        )
    }
  }

  render() {
    return this.pickPopup();
  }
}

export default LoginPopup;