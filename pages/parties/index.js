import { PureComponent, useRef, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import PartyCard from '../../components/Parties/PartyItem';
import FlagFillIcon from '../../components/Common/Icons/flagFill';
import { getParty } from '../../gateway/api';

import './parties.module.scss';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import Button from '../../components/Common/Button/Button';
import Link from '../../components/Common/Link/Link';
import InfiniteScroll from 'react-infinite-scroll-component';

const Parties = (props) => {
  const rowRef = useRef();
  // Inject AJAX call on first load

  return (
    <Layout>
      <Head>
        <title>ပါတီများ</title>
      </Head>
      <AppHeader>
        <div>ပါတီများ</div>
        <div className="Parties__buttonGroup">
          <i className="material-icons">search</i>
        </div>
      </AppHeader>
      <div className="Parties container">
        <div className="row mb-2">
          <div className="col-12">
            <div className="Parties__infoHeader">
              {/* <FlagFillIcon /> */}
              <p>
                (၂၀၂၀) ခုနှစ် အထွေထွေ ရွေးကောက်ပွဲတွင် ဝင်ရောက်ယှဥ်ပြိုင်မည့်
                နိုင်ငံရေးပါတီ (၉၅)ခု
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <InfiniteScroll> */}
            {[0, 1, 2].map((c, i) => (
              <div className="col-12" key={i}>
                <PartyCard />
              </div>
            ))}
          {/* </InfiniteScroll> */}
        </div>
      </div>
    </Layout>
  );
}

export default Parties;
