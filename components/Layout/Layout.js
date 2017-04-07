import React from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import ResetStyles from  './styles.js';

import Navigator from '../Navigator';

import { initStore } from '~/store';

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.title = props.title || 'Turismo Local';
  }
  
  componentDidMount() {
    if (window) {      
      window.Perf = require('react-addons-perf')      
    }
  }

  render() {
    return (
    <div>
      <ResetStyles />
      <Head>
        <title>Tovi - {this.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />      
      </Head>        
      <Navigator />
        { this.props.children }
    </div>
    )
  }
}

export default withRedux(initStore)(Layout)

