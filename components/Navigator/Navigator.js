import React, { Component } from 'react';
import Router from 'next/router';
import Logo from './Logo';
import OptionsPanel from './OptionsPanel/container';
import Login from './LoginPopup';
import { Nav } from './styles';

export default class Navigator extends Component {
  goHome = () => {
    Router.push('/');
  }

  render() {
    const { showLogin, toggleLogin } = this.props;
    return( 
      <Nav>
        <Logo onClick={this.goHome}/>        
        <OptionsPanel />
        { showLogin && <Login toggleLogin={toggleLogin} /> }
      </Nav>
      );
  }
}