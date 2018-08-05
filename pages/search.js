import React from 'react';
import Layout from '~/components/Layout';
import tourServices from '~/services/tours';
import LastMinuteResults from '~/components/Landing/LastMinute/SearchResult';
import { TourCollectionMapper } from '~/components/domains/tour';
import SearchSection from '~/components/Landing/SearchSection';

import Views from 'tovi-views';

class Tovi extends React.Component {
  static async getInitialProps({ req, query }) {
    const ciudad = query.c;
    const provincia = query.p;
    const body = {
      ciudad,
      provincia,
    };
    let tours, err;
    try {
      const toursRaw = await tourServices.getToursLastMinute(body);
      tours = TourCollectionMapper(toursRaw).data;
    } catch (err) {
      err = err;
    }

    return {
      act: query.act,
      resetCode: query.reset,
      redirect: query.red,
      tours,
      err,
      query,
      searchParams: body,
    };
  }

  render() {
    return (
      <div>
        <Layout activation={this.props.act} resetCode={this.props.resetCode} redirect={this.props.redirect}>
          <SearchSection query={this.props.query} />
          {!this.props.err && <LastMinuteResults tours={this.props.tours} searchParams={this.props.searchParams} />}
        </Layout>
      </div>
    );
  }
}

export default Tovi;
