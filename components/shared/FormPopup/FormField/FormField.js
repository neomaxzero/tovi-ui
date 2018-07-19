import React, { PureComponent } from 'react';
import { Field, Error } from './styled';

export default class FormField extends PureComponent {
  render() {
    const { message } = this.props;
    return (
      <div>
        <Field {...this.props} />
        {message && <Error>{message}</Error>}
      </div>
    );
  }
}
