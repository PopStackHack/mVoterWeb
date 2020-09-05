import 'flexboxgrid';
import Head from 'next/head';
import App from 'next/app';
import LocationGuard from '../hoc/LocationGuard';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../styles/base.scss';
import '../styles/helpers.scss';

// https://fonts.googleapis.com/icon?family=Material+Iconsimport AuthProvider from '../context/AuthProvider';
function mVoterApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <LocationGuard>
        <Component {...pageProps} />
      </LocationGuard>
    </>
  );
}

export default mVoterApp;
