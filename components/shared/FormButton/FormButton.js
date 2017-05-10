import React, { PureComponent } from 'react';
import { FormButtonSc } from './styled';
import FA from 'react-fontawesome';

export default class FromButton extends PureComponent {
  render() {
    const { name, loading } = this.props;
    return(
      <FormButtonSc {...this.props }>        
        { loading ? <FA name="circle-o-notch" style={{color: 'white'}} spin/> : name }
      </FormButtonSc>
    )
  }
}