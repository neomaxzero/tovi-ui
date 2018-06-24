import React from 'react';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
// import withRedux from 'next-redux-wrapper';
import withRedux from '~/utils/redux-wrapper';
import { store } from '~/store';
import Layout from '~/components/Layout';
import SearchSection from '~/components/Landing/SearchSection';

class Tovi extends React.Component {
  static async getInitialProps({ req, query, initialState }) {
    const isServer = !!req;
    return {
      isServer,
      act: query.act,
      resetCode: query.reset,
      redirect: query.red
    };
  }

  render() {
    return (
      <div>
        <Layout
          activation={this.props.act}
          resetCode={this.props.resetCode}
          redirect={this.props.redirect}
        />
        <SearchSection />
      </div>
    );
  }
}

const ToviRx = withRedux(store)(Tovi);
export default ToviRx;
// export default (Tovi);
