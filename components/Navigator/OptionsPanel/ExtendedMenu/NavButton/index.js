import React, { PureComponent } from 'react';
import { ButtonWrapper, Avatar } from './styles';
import DropList from './DropList';

export default class NavButton extends PureComponent {
  state = {
    showPopup: false,
  };

  toggle = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  handleClick = () => {
    this.toggle();
    this.props.onClick();
  };

  render() {
    const { children, avatar, child } = this.props;
    const showPopup = child && this.state.showPopup;
    return (
      <div>
        <ButtonWrapper onClick={this.handleClick}>
          <span> {children} </span>
          {avatar && <Avatar src={avatar} alt="avatar" />}
          {showPopup && <DropList items={child} />}
        </ButtonWrapper>
      </div>
    );
  }
}
