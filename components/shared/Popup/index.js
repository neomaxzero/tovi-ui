import React, { PureComponent } from 'react';
import Background from 'tovi-background';
import FA from 'react-fontawesome';
import { Container, Header, Body, Icon } from './styled';

export default class CenterPopup extends PureComponent {
  render()  {
    const { title, children, icon, onClickOutside } = this.props;

    return(
      <Background onClickOutside={onClickOutside}>
        <Container>
          <Header>
            { icon && 
            <Icon>
              <FA name={icon.name} style={{color: icon.color}}/>
            </Icon>
            }
            { title }
          </Header>
          <Body>
            { children }
          </Body>
        </Container>        
      </Background>      
    )
  }
}