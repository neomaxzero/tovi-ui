import React, { Component } from "react";
import { SelectField } from "~/components/shared/FormPopup/FormField";

import Select from "react-select";
import { DateContainer, Title, Day, Month, Year, Dmy } from "./styled";
import { get31, getMonths, getYearForm } from "./dateGenerator";
import i18n from "~/utils/intl";

export default class LittleDropDown extends Component {
  state = {
    dayOptions: get31(),
    monthOptions: getMonths,
    yearOptions: getYearForm(1900),
    date: {
      day: this.props.value.day,
      month: this.props.value.month,
      year: this.props.value.year
    }
  };

  setDay = ({ value }) => {
    this.setInState(value, "day");
  };

  setMonth = ({ value }) => {
    this.setInState(value, "month");
  };

  setYear = ({ value }) => {
    this.setInState(value, "year");
  };

  setInState = (value, attr) => {
    this.setState(
      {
        date: {
          ...this.state.date,
          [attr]: value
        }
      },
      () => {
        this.props.setDate(this.state.date);
      }
    );
  };

  render() {
    const { valid } = this.props;

    const { dayOptions, monthOptions, yearOptions } = this.state;

    return (
      <DateContainer>
        <Title>Fecha de Nacimiento</Title>
        <Dmy>
          <Day>
            <SelectField
              noResultsText={i18n.NO_RESULTS}
              name="day"
              className="selectForm"
              value={this.state.date.day}
              clearable={false}
              options={dayOptions}
              onChange={this.setDay}
              labelKey={"label"}
              valueKey={"value"}
              placeholder="Día"
              valid={valid}
            />
          </Day>
          <Month>
            <SelectField
              noResultsText={i18n.NO_RESULTS}
              name="month"
              className="selectForm"
              value={this.state.date.month}
              clearable={false}
              options={monthOptions}
              onChange={this.setMonth}
              matchProp={"label"}
              placeholder="Mes"
              valid={valid}
            />
          </Month>
          <Year>
            <SelectField
              noResultsText={i18n.NO_RESULTS}
              name="year"
              className="selectForm"
              value={this.state.date.year}
              clearable={false}
              options={yearOptions}
              onChange={this.setYear}
              matchProp={"label"}
              placeholder="Año"
              valid={valid}
            />
          </Year>

        </Dmy>

      </DateContainer>
    );
  }
}
