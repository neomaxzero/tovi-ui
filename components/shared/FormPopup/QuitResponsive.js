import React, { Component } from 'react';
import FA from 'react-fontawesome';
import { greyLine } from '~/components/shared/MainColors';
import { QuitResponsive } from './styled.js';

export default class QuitButton extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <QuitResponsive onClick={this.props.onClick}>
        <FA name="times" style={{ color: greyLine }} />
      </QuitResponsive>
    );
  }
}
