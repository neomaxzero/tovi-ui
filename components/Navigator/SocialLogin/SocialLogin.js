import React, { PureComponent } from 'react';
import { SocialLoginContainer, OneClickPhrase } from './SocialLoginSc';
import FacebookButton from './FacebookButton';

class SocialLogin extends PureComponent {
  static defaultProps = {
    desc: 'Inicia sesión con un click',
  }
  render() {
    const { onLogin, toggleLogin, desc } = this.props;

    return(
      <SocialLoginContainer>
        <OneClickPhrase></OneClickPhrase>
        <FacebookButton 
          onLogin={onLogin} 
          toggleLogin={toggleLogin}
          desc={desc}
        />
      </SocialLoginContainer>
    )
  }
}
export default SocialLogin;