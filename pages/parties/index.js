import { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';

import Layout from '../../components/Layout/Layout';
import PartyItem from '../../components/Parties/PartyItem';
import { getParties } from '../../gateway/api';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import Button from '../../components/Common/Button/Button';
import Link from '../../components/Common/Link/Link';

import './parties.module.scss';

const Parties = (props) => {
  // Inject AJAX call on first load
  const [parties, setParties] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // initial load
    fetchAndPushParties(true);
  }, []);

  async function fetchAndPushParties(init = false) {
    try {
      let pageQuery = page;
      if (!init) {
        pageQuery += 1;
        setPage(page + 1);
      }

      const response = await fetch(`/api/parties?page=${pageQuery}`);
      const { data, pagination } = await response.json();

      setParties(parties.concat(data));
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  }

  return (
    <Layout>
      <Head>
        <title>ပါတီများ | mVoter 2020</title>
      </Head>
      <AppHeader>
        <div className="text-bold">ပါတီများ</div>
        <div className="Parties__buttonGroup">
          <i className="material-icons">search</i>
        </div>
      </AppHeader>
        <div id="Parties" className="Parties container">
          <div className="row mb-2">
            <div className="col-12">
              <div className="Parties__infoHeader">
                <div className="icon-blk">
                  <i className="flag material-icons">flag</i>
                </div>
                <p>
                  (၂၀၂၀) ခုနှစ် အထွေထွေ ရွေးကောက်ပွဲတွင် ဝင်ရောက်ယှဥ်ပြိုင်မည့်
                  နိုင်ငံရေးပါတီ (၉၅)ခု
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <InfiniteScroll
                next={fetchAndPushParties}
                dataLength={parties.length}
                hasMore={true}>
                <ul className="Parties__list">
                {
                  parties.map((party) => {
                    return (
                      <PartyItem key={party.id} party={party} />
                    );
                  })
                }
                </ul>
              </InfiniteScroll>
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default Parties;
