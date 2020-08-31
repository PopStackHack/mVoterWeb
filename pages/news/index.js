import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import Button from '../../components/Common/Button/Button';
import Announcement from '../../components/News/Announcement/Announcement';
import Article from '../../components/News/Article/Article';

import './news.module.scss';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const News = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews(pageToLoad = 1) {
    try {
      const response = await fetch(`/api/news?page=${pageToLoad}`)
      const result = await response.json();

      return setNews(news.concat(result.data));
    } catch (error) {
      console.error(error);
    }
  }

  function loadMoreNews() {
    const nextPage = page + 1;
    fetchNews(nextPage);
    setPage(nextPage);
  }

  return (
    <Layout>
      <Head>
        <title>သတင်းများ</title>
      </Head>
      <AppHeader>
        <div className="text-bold">
          သတင်းများ
        </div>
      </AppHeader>
      <div id="News" className="News container">
        <div className="row">
          <div className="col-12">
            <InfiniteScroll
              scrollableTarget="News"
              dataLength={news.length}
              next={loadMoreNews}
              hasMore={true}
            >
              {
                // Note: We can't use "new" because it's a reserved word.
                news.map((singleNews) => (
                    <Article key={singleNews.id} news={singleNews} />
                  ))
              }
            </InfiniteScroll>
            </div>
          </div>
      </div>
    </Layout>
  );
}

export default News;
