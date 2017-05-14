import React, { Component } from 'react';
import { Field, Form } from '~/components/shared/FormPopup/styled';
import FormButton from '~/components/shared/FormButton/';

export default class SignUpForm extends Component {
  state = {
    name: '',
    surname: '',
    province: '',
    city: '',
    email: '',
    pass: '',
    valid: true,
    loading: false,
  }

  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    })    
  }

  render() {
    const { name, surname, valid, loading } = this.state;
    return(
      <Form>
        <Field 
          type="text" 
          name="name" 
          placeholder="Nombres" 
          onChange={this.onChange} 
          value={name} 
          valid={valid}
        />
        <Field 
          type="text" 
          name="surname" 
          placeholder="Apellido" 
          onChange={this.onChange} 
          value={surname} 
          valid={valid}
        />
        <FormButton name="Crear cuenta" loading={loading}/>
        
      </Form>

    );
  }
}