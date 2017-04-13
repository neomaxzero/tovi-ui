import React, { Component } from 'react';
import Background from '~/components/shared/Background';

class LoginPopup extends Component {
  toggleLogin = () => {
    console.log('TOGGLING!')
    this.props.toggleLogin();
  }

  render() {
    console.log(Background)
    return(
      <Background onClickOutside={this.toggleLogin}>
        <p> LOGIN</p>
      </Background>
    )
  }
}

export default LoginPopup;