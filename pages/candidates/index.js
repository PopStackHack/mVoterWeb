// Component code is so messy. Need to refactor afterwards. <- A common lie I tell to myself.
import React, { PureComponent, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import Button from '../../components/Common/Button/Button';
import { TabPanel, Tab } from '../../components/Common/Tabs';

import './candidates.module.scss';
import CandidateList from '../../components/Candidates/CandidateList/CandidateList';

const VotingPlace = () => (
  <div className="VotingPlace">
    <div className="VotingPlace__container">
      တာမွေ မဲဆန္ဒနယ်
    </div>
  </div>
);

const Candidates = () => {
  const [constituencies, setConstituencies] = useState([]);
  const [pyiThuCandidates, setPyiThuCandidates] = useState(null);
  const [amyoThaCandidates, setAmyoThaCandidates] = useState(null);
  const [stateCandidates, setStateCandidates] = useState(null);
  const [stateOrRegion, setStateOrRegion] = useState('');

  // Pre-fetch constituencies
  useEffect(() => {
    // Because we can't access localStorage before React is initiated.
    const stateOrRegion = /တိုင်း/.test(localStorage.getItem('stateRegion')) ? 'တိုင်းဒေသကြီး' : 'ပြည်နယ်';
    setStateOrRegion(stateOrRegion);

    fetchWardDetails();
  }, []);

  useEffect(() => {
    if (constituencies.length > 1) {
      const constituency = getConstituency('pyithu');
      fetchCandidates(constituency);
    }
  }, [constituencies]);

  function getConstituency(house) {
    return constituencies.find((constituency) => constituency.house === house);
  }

  async function fetchWardDetails() {
    const stateRegion = localStorage.getItem('stateRegion');
    const township = localStorage.getItem('township');
    const ward = localStorage.getItem('wardVillage');

    const response = await fetch(`/api/locations?type=details&state_region=${stateRegion}&township=${township}&ward=${ward}`);
    const result = await response.json();

    const {
      pyithu_hluttaw_constituency,
      amyotha_hluttaw_constituency,
      state_hluttaw_constituency,
    } = result.data.attributes;

    // map constituencies into house type
    setConstituencies([
      {
        house: 'pyithu',
        ...pyithu_hluttaw_constituency,
      },
      {
        house: 'amyotha',
        ...amyotha_hluttaw_constituency,
      },
      {
        house: 'state',
        ...state_hluttaw_constituency,
      }
    ]);
  }

  async function fetchCandidates(constituency) {
    const {
      id,
      house,
    } = constituency;

    if (house === 'pyithu' && pyiThuCandidates) return;
    if (house === 'amyotha' && amyoThaCandidates) return;
    if (house === 'state' && stateCandidates) return;

    const response = await fetch(`/api/candidates?constituency_id=${id}`);
    const result = await response.json();

    // Set Candidates based on house type
    if (house === 'pyithu') {
      // Cache and don't fetch again
      setPyiThuCandidates(result.data);
    } else if (house === 'amyotha') {
      setAmyoThaCandidates(result.data);
    } else if (house === 'state') {
      setStateCandidates(result.data);
    } else {
      throw new Error('House type not defined.');
    }
  }

  function onClickTab(value) {
    // Fetch each candidates filtered on values
    const constituency = getConstituency(value);
    if (constituency) {
      fetchCandidates(constituency);
    }
  }

  function renderCandidateList(candidates) {
    if (candidates) {
      return <CandidateList candidates={candidates} />;
    }

    if (candidates && candidates.length > 0) {
      return <div className="text-center no-data-text">ဒေတာမရှိပါ</div>;
    }

    return '';
  }

  return (
    <Layout>
      <Head>
        <title>ကိုယ်စားလှယ်လောင်းများ</title>
      </Head>
      <AppHeader className="CandidateHeader">
        <div className="text-bold">ကိုယ်စားလှယ်လောင်းများ</div>
        <div className="color-primary">
          <Link href="/location">
            <a><Button className="CandidateHeader__button"><i className="material-icons">location_on</i></Button></a>
          </Link>
          <Link href="/candidates/search">
            <a><Button className="CandidateHeader__button"><i className="material-icons">search</i></Button>
</a>
          </Link>
        </div>
      </AppHeader>
      <div id="Candidates" className="Candidates">
        <TabPanel onClickTab={onClickTab}>
          <Tab
            key="pyithuhluttaw"
            title={<div className="text-center">ပြည်သူ့<br />လွှတ်တော်</div>}
            value="pyithu">
            <div className="container">
              {renderCandidateList(pyiThuCandidates)}
            </div>
          </Tab>
          <Tab
            key="amyothahluttaw"
            title={<div className="text-center">အမျိုးသား<br />လွှတ်တော်</div>}
            value="amyotha">
            <div className="container">
              {renderCandidateList(amyoThaCandidates)}
            </div>
          </Tab>
          <Tab
            key="tinehluttaw"
            title={<div className="text-center">{stateOrRegion}<br />လွှတ်တော်</div>}
            value="state">
            <div className="container">
              {renderCandidateList(stateCandidates)}
            </div>
          </Tab>
        </TabPanel>
      </div>
    </Layout>
  );
}

export default Candidates;
