import React, { Component } from 'react';
import { Field, FormLogin} from './LoginFormSc';

export default class LoginForm extends Component {
  onSubmit = (ev) => {
    ev.preventDefault();
  }
  render() {
    return(
      <FormLogin onSubmit={this.onSubmit}>
        <Field type="text" placeholder="Correo Electrónico"/>
        <Field type="password" placeholder="Contraseña"/>
      </FormLogin>
    );
  }
}