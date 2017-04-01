import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import Layout from '../components/Layout';
import ResetStyles from  './styles.js';

class Tovi extends React.Component {
    static getInitialProps({store, isServer}) {
        return { isServer };
    }

    render() {
        return (
            <div>   
                <ResetStyles />
                <Layout />
            </div>

        )
    }
}

export default withRedux(initStore)(Tovi);