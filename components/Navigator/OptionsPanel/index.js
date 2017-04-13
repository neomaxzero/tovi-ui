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

  shouldComponentUpdate(_, nextState) {
    return nextState.compactMode !== this.state.compactMode;
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
    console.log(this.props);
    return (
      this.state.compactMode
      ? <CompactMenu items={items(this.props)} />
      : <ExtendedMenu items={items(this.props)} />
    )
  }
};

export default OptionsPanelContainer;