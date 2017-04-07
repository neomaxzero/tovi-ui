import React from 'react';
import NavButton from './NavButton';
import { OptionsPanel } from './styles';

class ExtendedMenu extends React.PureComponent {
  render() {
    const Items = this.props.items.map((option) => {
      return (
        <NavButton 
          key={option.name}
          onClick={option.handler}
        > 
          {option.name} 
        </NavButton>
      )
    });

    return (
    <OptionsPanel>
      { Items }
    </OptionsPanel>
    )
  }
}

export default ExtendedMenu;