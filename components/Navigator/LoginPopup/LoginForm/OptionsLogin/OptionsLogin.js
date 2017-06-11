import React, { PureComponent } from 'react';
import { OptionsContainer, Linki } from '~/components/shared/FormPopup/styled';
import FormCheckbox from '~/components/shared/FormPopup/FormCheckbox';

export default class OptionsLogin extends PureComponent {
  render() {
    return(
      <OptionsContainer>
        <FormCheckbox name="rememberme" value="rememberme">
          Recuérdame
        </FormCheckbox>        
        <Linki onClick={this.props.forgot}>
          Olvidé la contraseña
        </Linki>
      </OptionsContainer>
    );
  }
}