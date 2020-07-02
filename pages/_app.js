import 'flexboxgrid';
import Head from 'next/head';
// import '../styles/normalize.scss';
import '../styles/helpers.scss';

// https://fonts.googleapis.com/icon?family=Material+Icons
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}