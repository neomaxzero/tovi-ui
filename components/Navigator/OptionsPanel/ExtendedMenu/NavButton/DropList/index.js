import React, { PureComponent } from 'react';
import { List, Item } from './styled';

export default class DropList extends PureComponent {
  buildItems = () =>
    this.props.items.map(i => (
      <Item key={i.name} onClick={i.handler}>
        {i.name}
      </Item>
    ));
  render() {
    const items = this.buildItems();
    return <List>{items}</List>;
  }
}
