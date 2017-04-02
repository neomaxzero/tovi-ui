import React from 'react';
import { ListContainer } from './styles';

class CompactList extends React.PureComponent {
  render() {
    const items = this.props.items.map((item) => {
      return (
        <li key={item}>{ item }</li>
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