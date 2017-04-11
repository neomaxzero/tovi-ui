import React, { Component } from 'react';
import Logo from './Logo';
import OptionsPanel from './OptionsPanel';
import { Nav } from './styles';
import Router from 'next/router';

export default class Navigator extends Component {
  state = {
    showLogin: false,
  };

  toggleLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin,
    });
  }

  goHome = () => {
    Router.push('/');
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