import React from 'react';
import Layout from '~/components/Layout';
import tourServices from '~/services/tours';
import LastMinute from '~/components/Landing/LastMinute';
import { TourCollectionMapper } from '~/components/domains/tour';

class Tovi extends React.Component {
  static async getInitialProps({ req, query, initialState }) {
    let err = false;
    let tours;
    try {
      const toursRaw = await tourServices.getToursLastMinute();
      tours = TourCollectionMapper(toursRaw).data;
    } catch (err) {
      err = err;
    }

    const isServer = !!req;
    return {
      isServer,
      act: query.act,
      resetCode: query.reset,
      redirect: query.red,
      tours,
      err,
    };
  }

  render() {
    return (
      <Layout activation={this.props.act} resetCode={this.props.resetCode} redirect={this.props.redirect}>
        {!this.props.err && <LastMinute tours={this.props.tours} />}
      </Layout>
    );
  }
}

export default Tovi;
