import React from 'react';
import { ListContainer, ItemSy } from './styles';

class CompactList extends React.PureComponent {
  render() {
    const items = this.props.items.map((item) => {
      return (
        <ItemSy 
          key={item.name}
          onClick={item.handler}
        >
          { item.name }
        </ItemSy>
      )
    });
    return(
      <ListContainer>
        { items }
      </ListContainer>
    )
  }
}

export default CompactList;