import React, { Component } from 'react';
import Logo from './Logo';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Navigator extends Component {
  state = { 
    selected: 'home',
  };

  goHome = () => {
    console.log('HOME');
  }

  render() {
    return( 
      <div>
        <Logo onClick={this.goHome}/>
      </div>
      );
  }
}