import React, { Component } from 'react';
import Router from 'next/router';
import Login from './LoginPopup';
import SingUp from './SingUpPopup';
import PasswordBlocked from './LoginPopup/PasswordBlocked';
import SignUpSucceed from './SingUpPopup/SignUpSucceed';
import RequestResetPassword from '~/components/Layout/ResetPassword/RequestResetPopup';
import Nav from '/Users/mcespedes/Documents/Lab/tovi/tovi-shared-ui/packages/Nav/lib';
import { primary, greyLine } from '~/components/shared/MainColors';

export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.logoProps = {
      onClick: this.goHome,
      src: 'static/logo.png',
      alt: 'Tovi logo',
    };
    this.navTheme = {
      colorText: primary,
      colorHover: primary,
      colorBorder: greyLine,
    };
  }
  goHome = () => {
    Router.push('/');
  }

  render() {
    const { showLogin, showSignUp, 
      toggleLogin, toggleSignup,
      showEmailPassword, showSignupSucceed,
    showRequestResetPassword } = this.props;
    return( 
      <div>
        <Nav
          logo={{
            onClick: this.goHome,
            src: 'static/logo.png',
            alt: 'Tovi logo',
          }}
          items={this.props.items}
          theme={{
            colorText: primary,
            colorHover: primary,
            colorBorder: greyLine,
          }}
        />
        { showLogin && <Login toggleLogin={toggleLogin} toggleSignup={toggleSignup} /> }
        { showSignUp && <SingUp toggleSignup={toggleSignup} /> }
        { showEmailPassword && <PasswordBlocked /> }
        { showSignupSucceed && <SignUpSucceed /> }
        { showRequestResetPassword && <RequestResetPassword /> }
      </div>
      );
  }
}