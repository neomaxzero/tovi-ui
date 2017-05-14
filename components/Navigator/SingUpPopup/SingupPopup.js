import React, { Component } from 'react';
import FormPopup from '~/components/shared/FormPopup/FormPopup';
import SignUpForm from './SignUpForm';
import { Title } from './styled';

class SingupPopup extends Component {  
  render() {
    const { setLogin, toggleSignup } = this.props;

    return(
      <FormPopup toggle={toggleSignup}>
        {(lockPopup) => (
          <div>
            <Title>Crea una cuenta</Title>
            <SignUpForm />
          </div>
        )}          
      </FormPopup>
    )
  }
}

export default SingupPopup;