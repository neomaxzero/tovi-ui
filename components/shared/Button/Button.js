import React from 'react';
import { ButtonSc } from './ButtonSc';

class Button extends React.PureComponent {
  render() {
    console.log(this.props);
    const { name, onClick } = this.props;
    return(
      <ButtonSc onClick={onClick}>
        { name }
      </ButtonSc>
    );
  }
}

export default Button;