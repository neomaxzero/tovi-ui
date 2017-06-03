import React, { Component } from 'react';
import { SelectField } from '~/components/shared/FormPopup/FormField';
import { DropDownContainer, Title } from './styled';

export default class LittleDropDown extends Component {
  state = {
    options:[
      { value: 1, label: 'M' },
      { value: 2, label: 'F' },
    ],    
  };

  render() {
    const { valid, messages } = this.props;
    const { options } = this.state;
    return(
      <DropDownContainer>
          <Title>Sexo</Title>
          <SelectField
            name="form-field-sex"
            className="selectForm"
            value={this.props.value}
            clearable={false}
            options={options}
            onChange={this.props.setSex}
            placeholder=""
            valid={valid}
            messages={messages}
          />
      </DropDownContainer>
    )
  }
}