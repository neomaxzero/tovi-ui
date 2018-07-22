import React from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import ResetStyles from './styles.js';
import Navigator from '../Navigator';
import Views from 'tovi-views';
import ActivationPopup from './ActivationPopup';
import ResetPopup from './ResetPassword/ResetPasswordPopup';
import { store } from '~/store';

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.title = props.title || 'Turismo Local';
  }

  render() {
    const { activating, activation, reseting, resetCode } = this.props;
    return (
      <div>
        <ResetStyles />
        <Head>
          <title>Tovi - {this.title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navigator />
        {activating && <ActivationPopup code={activation} />}
        {reseting && <ResetPopup code={resetCode} />}
        {this.props.children}
        <Views.Blocks.Footer logoSrc="/static/logo_grey.png" />
      </div>
    );
  }
}

// const withRx = withRedux(store);
export default Layout;
