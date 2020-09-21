// Component code is so messy. Need to refactor afterwards. <- A common lie I tell to myself.
import React, { PureComponent, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import Button from '../../components/Common/Button/Button';
import { TabPanel, Tab } from '../../components/Common/Tabs';
import ConstituencyPlace from '../../components/Candidates/ConstituencyPlace/ConstituencyPlace';
import CandidateList from '../../components/Candidates/CandidateList/CandidateList';
import StateRegionCandidateList from '../../components/Candidates/StateRegionCandidateList/StateRegionCandidateList';
import { hasFullLocation } from '../../utils/helpers';

import './candidates.module.scss';

const Candidates = () => {
  const [constituencies, setConstituencies] = useState([]);
  const [pyiThuCandidates, setPyiThuCandidates] = useState(null);
  const [amyoThaCandidates, setAmyoThaCandidates] = useState(null);
  const [stateCandidates, setStateCandidates] = useState(null);
  const [stateOrRegion, setStateOrRegion] = useState('');
  const [shouldShowLocationLink, setShowLocationLink] = useState(true);
  const [loading, setLoading] = useState(false);

  // Pre-fetch constituencies
  useEffect(() => {
    // Because we can't access localStorage before React is initiated.
    if (hasFullLocation()) {
      setShowLocationLink(false);
    } else {
      return;
    }

    const stateRegion = localStorage.getItem('stateRegion')
    const township = localStorage.getItem('township');
    const wardVillage = localStorage.getItem('wardVillage');

    if (isNPT()) {
      setStateOrRegion('တိုင်းဒေသကြီး'); // NPT defaults to တိုင်းဒေသ
    } else {
      const stateOrRegion = /တိုင်း/.test(stateRegion) ? 'တိုင်းဒေသကြီး' : 'ပြည်နယ်';
      setStateOrRegion(stateOrRegion);
    }

    // This stage will fail if location isn't chosen first

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
    setLoading(true);
    const {
      id: constituencyId, // Note: this is INT
      house,
    } = constituency;

    if (house === 'pyithu' && pyiThuCandidates) return;
    if (house === 'amyotha' && amyoThaCandidates) return;
    if (house === 'state' && stateCandidates) return;

    // NPT has no constituencyId edge-case

    if (!constituencyId) {
      return;
    }

    const response = await fetch(`/api/candidates?constituency_id=${constituencyId}`);
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

    setLoading(false);
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

  function isNPT() {
    const stateRegion = localStorage.getItem('stateRegion');
    const township = localStorage.getItem('township');
    const wardVillage = localStorage.getItem('wardVillage');
    return stateRegion.includes('နေပြည်တော်') || township === wardVillage;
  }

  function renderStateRegionCandidateList(candidates) {
    // This is NPT Edge case
    if (!candidates && isNPT()) {
      return (
        <div className="text-center mt-5">နေပြည်တော် ပြည်ထောင်စုနယ်မြေတွင် <br />တိုင်းဒေသကြီး လွှတ်တော်ကိုယ်စားလှယ် ရွေးချယ်ရန် မလိုအပ်ပါ။</div>
      );
    }

    if (candidates) {
      return <StateRegionCandidateList candidates={candidates} />;
    }


    if (candidates && candidates.length === 0) {
      return <div className="text-center no-data-text">ဒေတာမရှိပါ</div>;
    }
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
            <a><Button className="CandidateHeader__button"><i className="material-icons vert-align-middle">location_on</i></Button></a>
          </Link>
          <Link href="/candidates/search">
            <a className="no-padding"><Button className="CandidateHeader__button"><i className="material-icons vert-align-middle">search</i></Button></a>
          </Link>
        </div>
      </AppHeader>
      {
         shouldShowLocationLink &&
          <div className="text-center">
            <img src="/mvoter2020-transparent-vertical.png" alt="mVoter logo" className="show-location-image d-lg-none" />
            <div className="show-location-chooser">
              မိမိ မဲဆန္ဒနယ်မှ ကိုယ်စားလှယ်လောင်းများကို ကြည့်ရှုရန် တည်နေရာအား ရွေးချယ်ပေးပါ။
            </div>
            <Link href="/location">
              <Button className="show-location-chooser-button">
                <i className="material-icons">location_on</i>
                <span>
                  တည်နေရာရွေးချယ်ရန်
                </span>
              </Button>
            </Link>
          </div>
      }
      {
         !shouldShowLocationLink &&
          <div id="Candidates" className="Candidates">
            <TabPanel onClickTab={onClickTab}>
              <Tab
                key="pyithuhluttaw"
                title={<div className="text-center">ပြည်သူ့<br />လွှတ်တော်</div>}
                value="pyithu">
                <div>
                  {
                    constituencies.length > 0 &&
                      constituencies[0].id &&
                        <ConstituencyPlace place={constituencies[0].name} />
                  }
                  {renderCandidateList(pyiThuCandidates)}
                </div>
              </Tab>
              <Tab
                key="amyothahluttaw"
                title={<div className="text-center">အမျိုးသား<br />လွှတ်တော်</div>}
                value="amyotha">
                <div>
                  {
                    constituencies.length > 0 &&
                      constituencies[1].id &&
                        <ConstituencyPlace place={constituencies[1].name} />
                  }
                  {renderCandidateList(amyoThaCandidates)}
                </div>
              </Tab>
              <Tab
                key="tinehluttaw"
                title={<div className="text-center">{stateOrRegion}<br />လွှတ်တော်</div>}
                value="state">
                <div>
                  {
                    constituencies.length > 0 &&
                      constituencies[2].id &&
                        <ConstituencyPlace place={constituencies[2].name} />
                  }
                  {renderStateRegionCandidateList(stateCandidates)}
                </div>
              </Tab>
            </TabPanel>
          </div>
      }
    </Layout>
  );
}

export default Candidates;
