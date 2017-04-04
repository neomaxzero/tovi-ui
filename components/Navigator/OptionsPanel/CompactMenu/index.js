import React from 'react';
import Bars from './Bars';
import CompactList from './CompactList';

class CompactMenu extends React.PureComponent {
  state = {
    opened: false,
  };

  toggleMenu = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  render() {
    return(
      <div>
        <Bars
          onClick={this.toggleMenu}
          showCross={this.state.opened}
        />
        { this.state.opened && <CompactList items={this.props.items} /> }
      </div>
  )};
};

export default CompactMenu;