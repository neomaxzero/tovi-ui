import React, { Component } from 'react';
import Router from 'next/router';
import Logo from './Logo';
import OptionsPanel from './OptionsPanel/container';
import Login from './LoginPopup';
import SingUp from './SingUpPopup';
import PasswordBlocked from './LoginPopup/PasswordBlocked';
import SignUpSucceed from './SingUpPopup/SignUpSucceed';

import { Nav } from './styles';

export default class Navigator extends Component {
  goHome = () => {
    Router.push('/');
  }

  render() {
    const { showLogin, showSignUp, 
      toggleLogin, toggleSignup,
      showEmailPassword, showSignupSucceed } = this.props;
    return( 
      <Nav>
        <Logo onClick={this.goHome}/>        
        <OptionsPanel />
        { showLogin && <Login toggleLogin={toggleLogin} toggleSignup={toggleSignup} /> }
        { showSignUp && <SingUp toggleSignup={toggleSignup} /> }
        { showEmailPassword && <PasswordBlocked /> }
        { showSignupSucceed && <SignUpSucceed />}
      </Nav>
      );
  }
}