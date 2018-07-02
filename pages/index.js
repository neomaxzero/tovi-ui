import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
// import withRedux from 'next-redux-wrapper';

import Layout from '~/components/Layout';
import tourServices from '~/services/tours';
import SearchSection from '~/components/Landing/SearchSection';
import LastMinute from '~/components/Landing/LastMinute';
import { TourCollectionMapper } from '~/components/domains/tour';

class Tovi extends React.Component {
  static async getInitialProps({ req, query, initialState }) {
    const toursRaw = await tourServices.getToursLastMinute();
    const tours = TourCollectionMapper(toursRaw).data;
    const isServer = !!req;
    return {
      isServer,
      act: query.act,
      resetCode: query.reset,
      redirect: query.red,
      tours,
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
        <LastMinute tours={this.props.tours} />
      </div>
    );
  }
}

export default Tovi;
