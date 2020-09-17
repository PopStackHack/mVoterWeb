import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/candidates');
  }, []);

  return (
    <div>
      <Layout />
    </div>
  );
};


export default Home;
