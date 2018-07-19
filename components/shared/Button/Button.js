import React from 'react';
import { ButtonSc } from './ButtonSc';

class Button extends React.PureComponent {
  render() {
    const { name, onClick } = this.props;
    return <ButtonSc onClick={onClick}>{name}</ButtonSc>;
  }
}

export default Button;
