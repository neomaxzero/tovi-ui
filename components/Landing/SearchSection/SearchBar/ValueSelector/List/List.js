import React from 'react'
import { BigList } from './style';

class List extends React.PureComponent {
  render() {
    return(
      <BigList>
        <li> Puerto Madero</li>
        <li> Obelisco </li>
        <li> Wilde </li>      
      </BigList>
    )
  }
}

export default List;