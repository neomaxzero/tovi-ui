import React, { PureComponent } from 'react';
import { SocialLoginContainer, OneClickPhrase } from './SocialLoginSc';
import FacebookButton from './FacebookButton';

class SocialLogin extends PureComponent {
  render() {
    const { onLogin } = this.props;

    return(
      <SocialLoginContainer>
        <OneClickPhrase>Inicia sesión con un click</OneClickPhrase>
        <FacebookButton onLogin={onLogin} />
      </SocialLoginContainer>
    )
  }
}
export default SocialLogin;