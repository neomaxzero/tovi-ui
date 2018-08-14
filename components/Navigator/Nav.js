import React, { Component } from 'react';
import Router from 'next/router';
import Nav from 'tovi-nav';
import Login from './LoginPopup';
import SingUp from './SingUpPopup';
import PasswordBlocked from './LoginPopup/PasswordBlocked';
import SignUpSucceed from './SingUpPopup/SignUpSucceed';
import RequestResetPassword from '~/components/Layout/ResetPassword/RequestResetPopup';

import { logoContainer, ButtonWrapper, ButtonWrapperHov } from './styles';
import { primary, colorTitles } from '~/components/shared/MainColors';

export default class NavBAr extends Component {
  constructor(props) {
    super(props);
    this.logoProps = {
      onClick: this.goHome,
      src: '/static/logo.png',
      alt: 'Tovi logo',
    };
    this.navTheme = {
      ListColorText: colorTitles,
      ListColorHover: primary,
      ListColorBackground: 'white',
      colorText: primary,
      colorHover: primary,
      colorBorder: '#CCC',
      colorBackground: 'white',
      repLogoContainer: logoContainer,
      repButtonWrapper: ButtonWrapper,
      repButtonWrapperHover: ButtonWrapperHov,
    };
  }
  goHome = () => {
    Router.push('/');
  };

  render() {
    const {
      showLogin,
      showSignUp,
      toggleLogin,
      toggleSignup,
      showEmailPassword,
      showSignupSucceed,
      showRequestResetPassword,
    } = this.props;

    return (
      <div>
        <Nav logo={{ ...this.logoProps }} items={this.props.items} theme={this.navTheme}>
          {showLogin && <Login toggleLogin={toggleLogin} toggleSignup={toggleSignup} />}
          {showSignUp && <SingUp toggleSignup={toggleSignup} />}
          {showEmailPassword && <PasswordBlocked />}
          {showSignupSucceed && <SignUpSucceed />}
          {showRequestResetPassword && <RequestResetPassword />}
        </Nav>
      </div>
    );
  }
}
