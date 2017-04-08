import React from 'react';
import { ValueSelectorSc, Title, Value } from './ValueSelectorSc';

class ValueSelector extends React.PureComponent {
  render() {
    const { title, value } = this.props;

    return(
      <ValueSelectorSc>
        <Title>{ title }</Title>
        <Value>{ value }</Value>
      </ValueSelectorSc>
    );
  }
}

export default ValueSelector;