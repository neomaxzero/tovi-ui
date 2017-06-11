import React, { PureComponent } from 'react';
import Popup from '~/components/shared/Popup';
import { Field, Form } from '~/components/shared/FormPopup/styled';
import FormButton from '~/components/shared/FormButton';
import { primary, error } from '~/components/shared/MainColors';
import Validators from '~/components/shared/Validators';
import { ErrorMessage } from'~/components/shared/FormPopup/styled';
import { OptionsContainer, Linki } from '~/components/shared/FormPopup/styled';
import { saveToken } from '~/utils/token';
import { PROVIDERS } from '~/components/Orphan/Login/constants';

import ResendPopup from '../ResendEmail';

import { MainContainer, ButtonContainer, Phrase, MessageContainer } from '~/components/shared/Message/styled';


export default class ActivationPopup extends PureComponent {
  render() {
    const { children, close } = this.props;
    return (
       <Popup
          title={'Algo salió mal'}
          icon={{name: 'times-circle-o',color: error}}
          onClickOutside={close}
        >
          <MainContainer>
            <MessageContainer>
              { children ||    
              <div>          
                <Phrase> No hemos podido enviar el e-mail con las instrucciones. </Phrase>        
                <Phrase> Por favor inténtalo nuevamente en unos instantes. </Phrase>  
              </div>
              }
            </MessageContainer>
            <ButtonContainer> 
              <FormButton onClick={close} name={'Cerrar'} />
            </ButtonContainer>
          </MainContainer>
        </Popup>
    )
  }
}