import React from 'react';
import Layout from '~/components/Layout';
import SearchSection from '~/components/Landing/SearchSection';
class Tovi extends React.Component {
  static getInitialProps({store, isServer}) {
    return { isServer };
  }

  render() {
    return (
      <div>   
        <Layout />
        <SearchSection />        
      </div>
    );
  }
}

export default Tovi;