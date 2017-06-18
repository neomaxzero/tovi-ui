import React, { Component } from 'react';
import FormPopup from '~/components/shared/FormPopup/FormPopup';
import { OwnLoginPhrase } from './LoginPopupSc';
import SocialLogin from './SocialLogin';
import LoginForm from './LoginForm';
import NewAccount from './NewAccount';
import PasswordBlocked from './PasswordBlocked';
import NotActivated from './NotActivated';
import FirstTime from './FirstTime';
import { Phrase } from '~/components/shared/Message/styled';

const types = {
  FORM: 'FORM',
  FIRST_TIME: 'FIRST_TIME',
  NOT_ACTIVATED: 'NOT_ACTIVATED',
  BLOCKED: 'BLOCKED',
}

class LoginPopup extends Component {  
  state = {
    type: types.FORM,
  }

  openSignUp = () => {
    this.props.toggleLogin();
    this.props.toggleSignup();
  }

  openForgot = () => {
    this.props.toggleLogin();
    this.props.showRequestResetPasswordPopup();
  }

  openReset = () => {
    this.props.toggleLogin();
    this.props.showResetForm();
  }

  firstTime = (user) => {
     this.setState({
       type: types.FIRST_TIME,
       user,
    });
  }
  
  notActivated = (userId) => {
    this.setState({
       type: types.NOT_ACTIVATED,
       userId,
    });
  }

  blocked = (user) => {
    this.setState({
      type: types.BLOCKED,
      user,
    })
  }

  pickPopup = () => {
    const { setLogin, toggleLogin, showRequestResetPasswordPopup } = this.props;
    
    switch (this.state.type) {      
      case types.FORM:
        return (
        <FormPopup toggle={toggleLogin}>
          {(lockPopup) => (
            <div>
              <SocialLogin onLogin={setLogin} toggleLogin={toggleLogin}/>
              <OwnLoginPhrase>o inicia sesión con tu correo electrónico </OwnLoginPhrase>
              <LoginForm  
                notActivated={this.notActivated} 
                onLogin={setLogin} 
                lockPopup={lockPopup} 
                toggleLogin={toggleLogin} 
                forgot={this.openForgot}
                showBlocked={this.blocked}
                showResetForm={this.openReset}
                showFirstTime={this.firstTime}
              />
              <NewAccount openSignUp={this.openSignUp}/>
            </div>
          )}          
        </FormPopup>);
      case types.NOT_ACTIVATED:
        return (
          <NotActivated 
            activateClose={toggleLogin}
            userId={this.state.userId}
          />          
        )
      case types.BLOCKED:
        return (
          <PasswordBlocked 
            activateClose={toggleLogin}            
            user={this.state.user}            
          />          
        );
      case types.FIRST_TIME:
        return (
          <FirstTime 
            activateClose={toggleLogin}            
            user={this.state.user}            
          />          
        ); 
    }
  }

  render() {
    return this.pickPopup();
  }
}

export default LoginPopup;