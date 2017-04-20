import React, { PureComponent } from 'react';
import { BackgroundSc } from './BackgroundSc';
import ClickOutside from 'react-click-outside';

export default class Background extends PureComponent {
  render(){
    const { children, onClickOutside } = this.props;
    return(
      <BackgroundSc>
        <ClickOutside onClickOutside={onClickOutside}>
         { children }
        </ClickOutside>
      </BackgroundSc>
    )
  }
}