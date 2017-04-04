import React from 'react';
import Layout from '~/components/Layout';

class Tovi extends React.Component {
    static getInitialProps({store, isServer}) {
        return { isServer };
    }

    render() {
        return (
            <div>   
                <Layout />
            </div>

        )
    }
}

export default Tovi;