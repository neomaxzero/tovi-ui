import Head from 'next/head';
import Navigator from '../Navigator';

const Layout = ({ children, title = 'Tovi - Tourismo Local' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>    
    <Navigator />
    { children }
  </div>
);
export default Layout