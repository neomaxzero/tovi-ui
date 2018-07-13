import React from 'react';
import { connect } from 'react-redux';
import { CenterMessage } from '~/components/Layout/styles';
import Layout from '~/components/Layout';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    let message;
    switch (this.props.statusCode) {
      case 404:
        {
          message = 'Oops, parece que esta pagina no existe';
        }
        break;
      default: {
        message = 'Un error inesperado. Estamos trabajando para solucionarlo';
      }
    }
    return (
      <div>
        <Layout title="Pagina no encontrada" />
        <CenterMessage>
          {message}
        </CenterMessage>
      </div>
    );
  }
}
export default connect()(Error);
