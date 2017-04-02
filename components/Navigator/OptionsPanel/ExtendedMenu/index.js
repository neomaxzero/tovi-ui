import React from 'react';
import NavButton from './NavButton';
import { OptionsPanel } from './styles';

class ExtendedMenu extends React.PureComponent {
  render() {
    const Items = this.props.items.map((option) => {
      return (<NavButton key={option}> {option} </NavButton>)
    });

    return (
    <OptionsPanel>
      { Items }
    </OptionsPanel>
    )
  }
}

export default ExtendedMenu;