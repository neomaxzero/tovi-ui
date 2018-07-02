import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// import styleSheet from 'styled-components/lib/models/StyleSheet'

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    console.log(styleTags);
    return { ...page, styleTags };
    console.log(styleTags);
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400"
            rel="stylesheet"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-select/dist/react-select.css"
          />
          <meta name="theme-color" content="#41C8C8" />
        </Head>
        <body>
          <Main />
          {this.props.customValue}
          <NextScript />
          <script
            src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
            async
            defer
          />
        </body>
      </html>
    );
  }
}

export default MyDocument;
