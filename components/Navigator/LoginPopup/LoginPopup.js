import React, { Component } from 'react';
import FormPopup from '~/components/shared/FormPopup/FormPopup';
import { H2 } from '~/components/shared/Typog/Typog';
import { OwnLoginPhrase } from './LoginPopupSc';
import SocialLogin from '~/components/Navigator/SocialLogin';
import LoginForm from './LoginForm';
import NewAccount from './NewAccount';
import PasswordBlocked from './PasswordBlocked';
import PasswordBlockedWithFacebook from './PasswordBlockedWithFacebook';
import NotActivated from './NotActivated';
import FirstTime from './FirstTime';
import { Phrase } from '~/components/shared/Message/styled';

const types = {
  FORM: 'FORM',
  FIRST_TIME: 'FIRST_TIME',
  NOT_ACTIVATED: 'NOT_ACTIVATED',
  BLOCKED: 'BLOCKED',
  BLOCKEDWITHFACEBOOK: 'BLOCKEDWITHFACEBOOK',
};

class LoginPopup extends Component {
  state = {
    type: types.FORM,
  };

  openSignUp = () => {
    this.props.toggleLogin();
    this.props.toggleSignup();
  };

  openForgot = () => {
    this.props.toggleLogin();
    this.props.showRequestResetPasswordPopup();
  };

  openReset = () => {
    this.props.toggleLogin();
    this.props.showResetForm();
  };

  firstTime = user => {
    this.setState({
      type: types.FIRST_TIME,
      user,
    });
  };

  notActivated = userId => {
    this.setState({
      type: types.NOT_ACTIVATED,
      userId,
    });
  };

  blocked = user => {
    this.setState({
      type: types.BLOCKED,
      user,
    });
  };

  blockedWithFacebook = user => {
    this.setState({
      type: types.BLOCKEDWITHFACEBOOK,
      user,
    });
  };

  pickPopup = () => {
    const { setLogin, toggleLogin, showRequestResetPasswordPopup } = this.props;

    switch (this.state.type) {
      case types.FORM:
        return (
          <FormPopup toggle={toggleLogin}>
            {lockPopup =>
              <div>
                <H2 center>Iniciar sesión</H2>
                <LoginForm
                  notActivated={this.notActivated}
                  onLogin={setLogin}
                  lockPopup={lockPopup}
                  toggleLogin={toggleLogin}
                  forgot={this.openForgot}
                  showBlocked={this.blocked}
                  showResetForm={this.openReset}
                  showFirstTime={this.firstTime}
                  redirect={redirect}
                />
                <NewAccount openSignUp={this.openSignUp} />
              </div>}
          </FormPopup>
        );
      case types.NOT_ACTIVATED:
        return (
          <NotActivated
            activateClose={toggleLogin}
            userId={this.state.userId}
          />
        );
      case types.BLOCKED:
        return (
          <PasswordBlocked activateClose={toggleLogin} user={this.state.user} />
        );
      case types.FIRST_TIME:
        return <FirstTime activateClose={toggleLogin} user={this.state.user} />;
      case types.BLOCKEDWITHFACEBOOK:
        return (
          <PasswordBlockedWithFacebook
            activateClose={toggleLogin}
            user={this.state.user}
          />
        );
    }
  };

  render() {
    return this.pickPopup();
  }
}

export default LoginPopup;
