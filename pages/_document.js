import React from 'react'

import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// import styleSheet from 'styled-components/lib/models/StyleSheet'

class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>          
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />              
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />          
          <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css" />
          <meta name="theme-color" content="#41C8C8" />
          {styleTags}
        </Head>
        <body>
          {main}
          {this.props.customValue}
          <NextScript />
          <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
        </body>
      </html>
    )
  }
}

export default MyDocument;