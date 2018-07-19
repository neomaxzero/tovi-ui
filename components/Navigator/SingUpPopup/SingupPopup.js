import React, { Component } from 'react';
import FormPopup from '~/components/shared/FormPopup/FormPopup';
import SignUpForm from './SignUpForm';
import { H2 } from '~/components/shared/Typog/Typog';

class SingupPopup extends Component {
  succeed = () => {
    this.props.toggleSignup();
    this.props.showSucceed();
  };

  render() {
    const { setLogin, toggleSignup } = this.props;
    return (
      <FormPopup toggle={toggleSignup}>
        {lockPopup => (
          <div style={{ width: '100%' }}>
            <H2 center>Crea una cuenta</H2>
            <SignUpForm lockPopup={lockPopup} succeed={this.succeed} toggle={toggleSignup} setLogin={setLogin} />
          </div>
        )}
      </FormPopup>
    );
  }
}

export default SingupPopup;
