import React, { PureComponent } from 'react';
import { NewAccountContainer, NoAccQ } from './LoginPopupSc';
import LoginButton from './LoginButton';

export default class NewAccount extends PureComponent {
  render() {
    return(
      <NewAccountContainer>
        <NoAccQ>¿No tienes cuenta?</NoAccQ>
        <LoginButton name="Crear una Cuenta" secundary />
      </NewAccountContainer>
    );
  }
}