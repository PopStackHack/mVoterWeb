import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import Button from '../../components/Common/Button/Button';
import Announcement from '../../components/News/Announcement/Announcement';
import Article from '../../components/News/Article/Article';

const News = () => {
  return (
    <Layout>
      <Head>
        <title>သတင်းများ</title>
      </Head>
      <AppHeader>
        <div>
          သတင်းများ
        </div>
      </AppHeader>
      <div className="News__list container">
        <Article />
      </div>
    </Layout>
  );
}

export default News;
