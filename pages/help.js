import React from 'react';
import { connect } from 'react-redux';
import Layout from '~/components/Layout';

class Help extends React.Component {
  static getInitialProps({ store, isServer }) {
    return { isServer };
  }
  render() {
    return (
      <div>
        <Layout title="Ayuda" />
        <p> This is the Help page </p>
      </div>
    );
  }
}
export default connect()(Help);
