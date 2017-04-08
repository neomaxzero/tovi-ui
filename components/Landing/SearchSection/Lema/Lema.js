import React from 'react';
import { LemasContainer, LemaSc } from './LemaSc';

class Lema extends React.PureComponent {
  render() {
    return(
      <LemasContainer>
        <LemaSc>Tours en el destino que elijas.</LemaSc>
        <LemaSc>Experimenta como un local</LemaSc>
      </LemasContainer>
    );
  }
}
export default Lema;