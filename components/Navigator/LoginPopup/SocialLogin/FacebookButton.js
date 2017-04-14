import React, { PureComponent } from 'react';
import FA from 'react-fontawesome';

import { FacebookButtonSc, FacebookPhrase } from './SocialLoginSc';

class FacebookButton extends PureComponent {
  render() {
    return(
      <FacebookButtonSc>
        <FA name="facebook" style={{color: 'white'}}/>
        <FacebookPhrase>Iniciar sesión con Facebook</FacebookPhrase>
      </FacebookButtonSc>
    )
  }
}
export default FacebookButton;