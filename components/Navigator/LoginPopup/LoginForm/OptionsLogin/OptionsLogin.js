import React, { PureComponent } from 'react';
import { OptionsContainer, LabelSc, Linki } from './OptionsLoginSc';
import FormCheckbox from '~/components/shared/FormPopup/FormCheckbox';

export default class OptionsLogin extends PureComponent {
  render() {
    return(
      <OptionsContainer>
        <FormCheckbox name="rememberme" value="rememberme">
          Recuérdame
        </FormCheckbox>        
        <Linki>
          Olvidé la contraseña
        </Linki>
      </OptionsContainer>
    );
  }
}