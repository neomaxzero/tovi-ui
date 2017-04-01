import React, { Component } from 'react';
import Logo from './Logo';
import OptionsPanel from './OptionsPanel';
import { Nav } from './styles';

export default class Navigator extends Component {
  goHome = () => {
    console.log('HOME2');
  }

  render() {
    return( 
      <Nav>
        <Logo onClick={this.goHome}/>
        <OptionsPanel />
      </Nav>
      );
  }
}