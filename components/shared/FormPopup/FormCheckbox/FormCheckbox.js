import React, { PureComponent } from 'react';
import { LabelSc } from './styled';

export default class FormCheckbox extends PureComponent {
  render() {
    const { children, name, value, onPress } = this.props;
    return (
      <LabelSc>
        <input type="checkbox" name={name} value={value} onClick={onPress} />
        {children}
      </LabelSc>
    );
  }
}
