import React, { Component } from "react";
import { SelectField } from "~/components/shared/FormPopup/FormField";
import { DropDownContainer, Title } from "./styled";
import i18n from "~/utils/intl";

export default class LittleDropDown extends Component {
  state = {
    options: [{ value: 1, label: "Hombre" }, { value: 2, label: "Mujer" }]
  };

  render() {
    const { valid, messages } = this.props;
    const { options } = this.state;
    return (
      <DropDownContainer>
        <Title>Sexo</Title>
        <SelectField
          noResultsText={i18n.NO_RESULTS}
          name="form-field-sex"
          className="selectForm"
          value={this.props.value}
          clearable={false}
          options={options}
          onChange={this.props.setSex}
          placeholder=""
          matchProp={"label"}
          valid={valid}
          messages={messages}
        />
      </DropDownContainer>
    );
  }
}
