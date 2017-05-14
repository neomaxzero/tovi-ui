import React, { Component } from 'react';
import Background from '~/components/shared/Background';
import { PopupContainer } from './styled';

class FormPopup extends Component {
  state = {
    locked : false,
  }
  
  toggle = () => {
    if(this.state.locked) return;

    this.props.toggle();
  }

  lockPopup = () => {
    this.setState({
      locked: true,
    });
  }

  render() {
    const { children } = this.props;
    return(
      <Background onClickOutside={this.toggle}>
        <PopupContainer>
          { children(this.lockPopup) }
        </PopupContainer>
      </Background>
    )
  }
}

export default FormPopup;