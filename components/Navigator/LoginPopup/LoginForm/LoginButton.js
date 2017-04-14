import React, { PureComponent } from 'react';
import LoginButtonSc from './LoginFormSc';

export default class LoginButton extends PureComponent {
  render() {
    const { name } = this.props;
    
    return(
      <LoginButtonSc>
        { name }
      </LoginButtonSc>
    )
  }
}