import React, { PureComponent } from 'react';
import { SocialLoginContainer, OneClickPhrase } from './SocialLoginSc';
import FacebookButton from './FacebookButton';

class SocialLogin extends PureComponent {
  static defaultProps = {
    desc: 'Inicia sesión con un click',
  };
  render() {
    const { onLogin, toggleLogin, desc, showBlockedWithFacebook } = this.props;

    return (
      <SocialLoginContainer>
        <OneClickPhrase />
        <FacebookButton
          onLogin={onLogin}
          toggleLogin={toggleLogin}
          desc={desc}
          showBlockedWithFacebook={showBlockedWithFacebook}
        />
      </SocialLoginContainer>
    );
  }
}
export default SocialLogin;
