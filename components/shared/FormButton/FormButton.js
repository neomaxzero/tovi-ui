import React, { PureComponent } from 'react';
import { FormButtonSc } from './styled';
import { primary } from '~/components/shared/MainColors';
import FA from 'react-fontawesome';

export default class FromButton extends PureComponent {
  render() {
    const { name, loading } = this.props;
    const color = this.props.secundary ? primary : 'white';
    return (
      <FormButtonSc {...this.props}>
        {loading ? <FA name="circle-o-notch" style={{ color }} spin /> : name}
      </FormButtonSc>
    );
  }
}
