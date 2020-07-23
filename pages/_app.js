import 'flexboxgrid';
import Head from 'next/head';
import App from 'next/app';
import '../styles/base.scss';
import '../styles/helpers.scss';
import { appWithTranslation } from '../hoc/i18n';

// https://fonts.googleapis.com/icon?family=Material+Icons
function mVoterApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

mVoterApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
}

export default appWithTranslation(mVoterApp);
