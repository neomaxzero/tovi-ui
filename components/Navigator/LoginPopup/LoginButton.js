import React, { PureComponent } from 'react';
import { LoginButtonSc } from './LoginPopupSc';

export default class LoginButton extends PureComponent {
  render() {
    const { name } = this.props;
    return(
      <LoginButtonSc {...this.props }>
        { name }
      </LoginButtonSc>
    )
  }
}