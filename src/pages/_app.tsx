import { AppProps } from 'next/app';
import '../styles/App.css';
import '../styles/index.css';
import Layout from '../components/Layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
