import React from 'react';
import Layout from '~/components/Layout';
import { BodyWrapper } from '~/components/Layout/styles';
import tourServices from '~/services/tours';
import LastMinute from '~/components/Landing/LastMinute';
import { TourMapper } from '~/components/domains/tour';
import Views from 'tovi-views';

class Tovi extends React.Component {
  static async getInitialProps({ req, query }) {
    const id = query.id;
    const toursRaw = await tourServices.getTour(id);
    const tourInfo = TourMapper(toursRaw.data);
    return {
      query,
      tourInfo,
    };
  }

  render() {
    return (
      <div>
        <Layout activation={this.props.act} resetCode={this.props.resetCode} redirect={this.props.redirect} />
        <BodyWrapper>
          <Views.DetailsView tour={this.props.tourInfo} />
        </BodyWrapper>
      </div>
    );
  }
}

export default Tovi;
