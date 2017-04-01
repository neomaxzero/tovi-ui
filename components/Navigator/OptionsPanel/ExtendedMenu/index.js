import React from 'react';
import NavButton from './NavButton';
import { OptionsPanel } from './styles';

class ExtendedMenu extends React.PureComponent {
  render() {
    return (
    <OptionsPanel>
      <NavButton> Ayuda </NavButton>      
      <NavButton> Empresas </NavButton>      
      <NavButton> Conviertete en guia </NavButton>      
      <NavButton> Registrate </NavButton>      
      <NavButton> Iniciar Sesion </NavButton>      
    </OptionsPanel>
    )
  }
}

export default ExtendedMenu;