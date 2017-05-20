import React, { Component } from 'react';
import FormPopup from '~/components/shared/FormPopup/FormPopup';
import SignUpForm from './SignUpForm';
import { Title } from './styled';

class SingupPopup extends Component {  
  succeed = () => {
    this.props.toggleSignup();
    this.props.showSucceed();
  }

  render() {
    const { setLogin, toggleSignup } = this.props;
    return(
      <FormPopup toggle={toggleSignup}>
        {(lockPopup) => (
          <div style={{width: '100%'}}>
            <Title>Crea una cuenta</Title>
            <SignUpForm succeed={this.succeed}/>
          </div>
        )}          
      </FormPopup>
    )
  }
}

export default SingupPopup;