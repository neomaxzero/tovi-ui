import React, { Component } from 'react';
import { debounce } from 'lodash';
import ExtendedMenu from './ExtendedMenu';
import CompactMenu from './CompactMenu';
import items from './config';

class OptionsPanelContainer extends Component {
  state = {
    compactMode: false,
  };

  componentDidMount() {
    this.verifyMode();
    window.onresize = debounce(this.verifyMode, 200);
  };

  componentWillUnmount() {
    window.onresize = null;
  };

  verifyMode = () => {
    this.setState({
      compactMode: window.innerWidth < 768,
    })
  };


  render() {
    return (
      this.state.compactMode
      ? <CompactMenu items={items(this.props)} />
      : <ExtendedMenu items={items(this.props)} />
    )
  }
};

export default OptionsPanelContainer;