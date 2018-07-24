import React, { Component } from 'react';
import { CenterMessage } from '~/components/Layout/styles';

export default class EmptyMessage extends Component {
  render() {
    let message = `No se han encontrado resultados para ${this.props.provincia}`;
    if (this.props.ciudad) message += `, ${this.props.ciudad}`;
    return <CenterMessage oStyle={'min-height: 50vh'}>{message}</CenterMessage>;
  }
}
