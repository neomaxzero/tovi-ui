import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import ResetStyles from  './styles.js';

import Navigator from '../Navigator';

import { initStore } from '~/store';

const Layout = ({ children, title = 'Turismo Local' }) => {  
  console.log(title);
return (
  <div>
    <ResetStyles />
    <Head>
      <title>Tovi - { title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />      
    </Head>        
    <Navigator />
    { children }
  </div>
)};
export default withRedux(initStore)(Layout)