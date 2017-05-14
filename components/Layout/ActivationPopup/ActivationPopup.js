import React, { PureComponent } from 'react';
import Popup from '~/components/shared/Popup';
import FormButton from '~/components/shared/FormButton';
import { primary } from '~/components/shared/MainColors';
import { ActivationContainer, ButtonContainer, Phrase, MessageContainer } from './styled';

export default class ActivationPopup extends PureComponent {
  render() {
    const { activateClose } = this.props;
    return(
      <Popup
        title={'¡Cuenta activada!'}
        icon={{name: 'check-circle-o',color: primary}}
        onClickOutside={activateClose}
      >
        <ActivationContainer>
          <MessageContainer>              
            <Phrase> Muchas gracias por activar tu cuenta.</Phrase>        
            <Phrase> Ya puedes comenzar a utilizar Tovi.</Phrase>  
          </MessageContainer>
          <ButtonContainer> 
            <FormButton onClick={activateClose} name={'Empezar'} />
          </ButtonContainer>
        </ActivationContainer>
      </Popup>
    )
  }
}