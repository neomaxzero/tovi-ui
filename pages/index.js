import antdCss from 'antd/dist/antd.css';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import Layout from '../components/Layout';

class Tovi extends React.Component {
    static getInitialProps({store, isServer}) {
        return { isServer };
    }

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: antdCss }} />
                <Layout />
            </div>

        )
    }
}

export default withRedux(initStore)(Tovi);