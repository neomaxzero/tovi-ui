import React, { PureComponent } from 'react';
import { NewAccountContainer, NoAccQ } from './LoginPopupSc';
import FormButton from '~/components/shared/FormButton/';

export default class NewAccount extends PureComponent {
  render() {
    return(
      <NewAccountContainer>
        <NoAccQ>¿No tienes cuenta?</NoAccQ>
        <FormButton name="Crear una Cuenta" secundary />
      </NewAccountContainer>
    );
  }
}