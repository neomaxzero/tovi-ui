import React from 'react';
import FA from 'react-fontawesome';
import { primary } from '~/components/shared/MainColors';

import { SyBars } from './sy';

class Bars extends React.PureComponent {
  render() {
    const icon = this.props.showCross ? 'close' : 'bars';
    return (      
      <SyBars onClick={this.props.onClick}>
        <FA name={icon}
        style={{color: primary}}
        />
      </SyBars>
    )
  }
}

export default Bars;