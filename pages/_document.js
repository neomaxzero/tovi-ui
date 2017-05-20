import React from 'react'

import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    )    
    return { html, head, styles }
  }

  render () {
    return (
      <html>
        <Head>          
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />              
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />          
          <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css" />

        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument;