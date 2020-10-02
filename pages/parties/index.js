import { useRef, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';

import useAPI from '../../hooks/useAPI';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import Button from '../../components/Common/Button/Button';
import PartyList from '../../components/Parties/PartyList/PartyList';
import { useAuthContext } from '../../context/AuthProvider';

import './parties.module.scss';

const Parties = (props) => {
  // Inject AJAX call on first load
  const { updateToken } = useAuthContext();
  const [parties, setParties] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [, fetchData] = useAPI();

  useEffect(() => {
    // initial load
    ReactGA.pageview(window.location.pathname);

    fetchParties()
      .then((result) => {
        setParties(result.data);
        setTotalCount(result.pagination.total);
      })
      .catch(console.error);
  }, []);


  async function fetchParties(pageToLoad = 1) {
    try {
      const data = await fetchData('/api/parties', {
        page: pageToLoad,
        item_per_page: 25,
      });

      return data;
    } catch(error) {
      console.error(error);
    }
  }

  async function loadMoreParties() {
    const nextPage = page + 1;
    fetchParties(nextPage)
      .then((result) => setParties(parties.concat(result.data)))
      .then(() => setPage(nextPage))
      .catch(console.error);
  }

  return (
    <Layout>
      <Head>
        <title>ပါတီများ | mVoter 2020</title>
      </Head>
      <AppHeader>
        <div className="text-bold">ပါတီများ</div>
        <div className="Parties__buttonGroup">
          <Link href="/parties/search">
            <a>
              <Button className="color-primary no-padding">
                <i className="material-icons vert-align-middle">search</i>
              </Button>
            </a>
          </Link>
        </div>
      </AppHeader>
        <div id="Parties" className="Parties">
          <div className="row no-gutters mb-xs-2">
            <div className="col-12">
              <div className="Parties__infoHeader">
                <div className="icon-blk">
                  <i className="flag material-icons">flag</i>
                </div>
                <p>
                  (၂၀၂၀) ခုနှစ် အထွေထွေ ရွေးကောက်ပွဲတွင် ဝင်ရောက်ယှဥ်ပြိုင်မည့်
                  နိုင်ငံရေးပါတီ (၉၂) ခု
                </p>
              </div>
            </div>
          </div>
          <InfiniteScroll
            next={loadMoreParties}
            dataLength={parties.length}
            hasMore={parties.length !== totalCount}>
              <PartyList parties={parties} />
          </InfiniteScroll>
        </div>
    </Layout>
  );
}

export default Parties;
