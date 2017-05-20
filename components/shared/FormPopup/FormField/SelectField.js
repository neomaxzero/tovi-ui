import React, { PureComponent } from 'react';
import Select from 'react-select';
import { Error, BorderSelect } from './styled';

export default class FormField extends PureComponent {
  render() {
    const { message, valid } = this.props;
    return(
      <div>
        <BorderSelect valid={valid}>
          <Select {...this.props} />            
        </BorderSelect>
        { message && <Error>{message}</Error> }
      </div>
    )
  }
}