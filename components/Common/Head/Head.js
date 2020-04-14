import Head from 'next/head';

const CommonHead = ({ title = 'mVoter 2020', children }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    {children}
  </Head>
);

export default CommonHead;
