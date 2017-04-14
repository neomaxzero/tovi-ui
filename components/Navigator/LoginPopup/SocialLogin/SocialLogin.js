import React, { PureComponent } from 'react';
import { SocialLoginContainer, OneClickPhrase } from './SocialLoginSc';
import FacebookButton from './FacebookButton';

class SocialLogin extends PureComponent {
  render() {
    return(
      <SocialLoginContainer>
        <OneClickPhrase>Inicia sesión con un click</OneClickPhrase>
        <FacebookButton />
      </SocialLoginContainer>
    )
  }
}
export default SocialLogin;