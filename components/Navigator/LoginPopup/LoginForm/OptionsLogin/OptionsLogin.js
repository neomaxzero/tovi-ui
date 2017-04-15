import React, { PureComponent } from 'react';
import { OptionsContainer, LabelSc, Linki } from './OptionsLoginSc';

export default class OptionsLogin extends PureComponent {
  render() {
    return(
      <OptionsContainer>
        <LabelSc> 
          <input type="checkbox" name="rememberme" value="rememberme" />
          Recuérdame
        </LabelSc>
        <Linki>
          Olvidé la contraseña
        </Linki>
      </OptionsContainer>
    );
  }
}