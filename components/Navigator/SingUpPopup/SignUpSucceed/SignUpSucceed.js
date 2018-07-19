import React, { PureComponent } from 'react';
import { noop } from 'lodash';
import Popup from '~/components/shared/Popup';
import FormButton from '~/components/shared/FormButton';
import { primary } from '~/components/shared/MainColors';
import { ContainerMedium, ButtonContainer, Phrase, MessageContainer } from '~/components/shared/Popup/styled';

export default class SignUpSucceed extends PureComponent {
  render() {
    const { close } = this.props;
    return (
      <Popup
        title={'¡Gracias por registrarte!'}
        icon={{ name: 'check-circle-o', color: primary }}
        onClickOutside={close}
      >
        <ContainerMedium size={'33em'}>
          <MessageContainer>
            <Phrase> Hemos enviado un e-mail a la dirección de correo electrónico.</Phrase>
            <Phrase> Sigue las instrucciones enviadas en el e-mail para activar tu cuenta.</Phrase>
          </MessageContainer>
          <ButtonContainer>
            <FormButton onClick={close} name={'Cerrar'} secundary />
          </ButtonContainer>
        </ContainerMedium>
      </Popup>
    );
  }
}
