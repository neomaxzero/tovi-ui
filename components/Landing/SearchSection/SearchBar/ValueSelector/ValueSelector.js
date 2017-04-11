import React from 'react';
import ClickOutside from 'react-click-outside';
import { ValueSelectorSc, Title, Value } from './ValueSelectorSc';
import List from './List/List';

class ValueSelector extends React.PureComponent {
  state = {
    listOpened: false,
  }
  setList = (val) => {
    this.setState({
      listOpened: val,
    });
  }
  openList = () => {
    console.log('opening');
    this.setList(true);
  }
  closeList = () => {
    console.log('click outside')
    this.setList(false);
  }

  render() {
    const { title, value } = this.props;

    return(
        <ClickOutside onClickOutside={this.closeList}>
          <ValueSelectorSc>
            <Title>{ title }</Title>
            <Value onClick={this.openList}>{ value }</Value>
          </ValueSelectorSc>
          { this.state.listOpened && <List /> }
        </ClickOutside>
      
    );
  }
}

export default ValueSelector;