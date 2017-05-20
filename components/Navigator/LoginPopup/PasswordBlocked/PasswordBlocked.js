import React, { PureComponent } from 'react';
import { noop } from 'lodash';
import Popup from '~/components/shared/Popup';
import FormButton from '~/components/shared/FormButton';
import { error } from '~/components/shared/MainColors';
import { ContainerMedium, ButtonContainer, Phrase, MessageContainer } from '~/components/shared/Popup/styled';

export default class ActivationPopup extends PureComponent {
  render() {
    const { sendMailPassword } = this.props;
    return(
      <Popup
        title={'Contraseña bloqueada'}
        icon={{name: 'times-circle-o', color: error}}
        onClickOutside={noop}
      >
        <ContainerMedium>
          <MessageContainer>              
            <Phrase> Por razones de seguridad tu contraseña ha sido bloqueada.</Phrase>        
            <Phrase> Necesitamos enviarte un e-mail para que puedas establecer</Phrase>        
            <Phrase> una nueva contraseña.</Phrase>                                
          </MessageContainer>
          <ButtonContainer> 
            <FormButton onClick={sendMailPassword} name={'Enviar mail'} />
          </ButtonContainer>
        </ContainerMedium>
      </Popup>
    )
  }
}