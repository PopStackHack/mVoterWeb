import { PureComponent } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import PartyCard from '../../components/Party/PartyCard';

import './parties.module.scss';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import Button from '../../components/Common/Button/Button';
import Link from '../../components/Common/Link/Link';

const Parties = (props) => {
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
              <p>(၂၀၂၀) ခုနှစ် အထွေထွေ ရွေးကောက်ပွဲတွင် ဝင်ရောက်ယှဥ်ပြိုင်မည့် နိုင်ငံရေးပါတီ (၉၅)ခု</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {[0, 1, 2].map((c, i) => (
              <Link key={i} href={`/parties/${i}`}>
                <PartyCard />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Parties;
