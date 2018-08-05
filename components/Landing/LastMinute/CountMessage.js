import React, { Component } from 'react';
import { Results } from './styled';

const pl = (count, w) => (count === 1 ? w : `${w}s`);

export default class CountMessage extends Component {
  render() {
    const { count, provincia, ciudad } = this.props;

    let message = `${count} ${pl(count, 'resultado')} ${pl(count, 'encontrado')} para ${provincia}`;
    message += ciudad ? `, ${ciudad}.` : '.';
    return <Results>{message}</Results>;
  }
}
