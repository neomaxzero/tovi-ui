import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// import styleSheet from 'styled-components/lib/models/StyleSheet'

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/react-select@1.2.1/dist/react-select.css" />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link rel="stylesheet" type="text/css" href="/static/geolocation.css" />
          <meta name="theme-color" content="#41C8C8" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer />
          <script src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY_GOOGLE_PLACES}&libraries=places`} />
        </body>
      </html>
    );
  }
}

export default MyDocument;
