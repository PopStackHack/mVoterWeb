import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import ActivePeopleIcon from '../../components/Common/Icons/activePeople';
import Button from '../../components/Common/Button/Button';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import TownshipModal from '../../components/Location/TownshipModal';
import WardVillageModal from '../../components/Location/WardVillageModal';

import './location.module.scss';
import { hasFullLocation } from '../../utils/helpers';
import { LOCALSTORAGE_KEYS } from '../../utils/constants';

const Location = () => {
  const [townshipModalOpen, setTownshipModalOpen] = useState(false);
  const [wardVillageModalOpen, setWardVillageModalOpen] = useState(false);
  const [stateRegion, setStateRegion] = useState();
  const [township, setTownship] = useState();
  const [wardVillage, setWardVillage] = useState();
  const [isAppStart, setIsAppStart] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (hasFullLocation()) {
      setIsAppStart(false);
      setStateRegion(localStorage.getItem(LOCALSTORAGE_KEYS.STATE_REGION));
      setTownship(localStorage.getItem(LOCALSTORAGE_KEYS.TOWNSHIP));
      setWardVillage(localStorage.getItem(LOCALSTORAGE_KEYS.WARD_VILLAGE));
    }
  }, []);

  function onClickDone() {
    localStorage.setItem(LOCALSTORAGE_KEYS.STATE_REGION, stateRegion);
    localStorage.setItem(LOCALSTORAGE_KEYS.TOWNSHIP, township);
    localStorage.setItem(LOCALSTORAGE_KEYS.WARD_VILLAGE, wardVillage);
    router.push('/candidates');
  }

  function onClickChooseTownship() {
    setTownshipModalOpen(true);
  }

  function onClickChooseWardVillage() {
    setWardVillageModalOpen(true);
  }

  function onClickTownship(chosenStateRegion, chosenTownship) {
    // Set localStorage here
    setStateRegion(chosenStateRegion);
    setTownship(chosenTownship);
    setWardVillage(null);
    setTownshipModalOpen(false);
  }

  function onClickWardVillage(chosenWardVillage) {
    setWardVillage(chosenWardVillage);
    setWardVillageModalOpen(false);
  }

  return (
    <Layout shouldHideBottomNav style={{ paddingBottom: 0 }}>
      <Head>
        <title>မဲဆန္ဒနယ်ရွေးရန် | mVoter 2020</title>
      </Head>
      {!isAppStart && (
        <AppHeader>
          <div className="d-flex">
            <Button>
              <Link href="/candidates">
                <i className="material-icons">arrow_back</i>
              </Link>
            </Button>
            <span className="d-inline-block ml-3">ကိုယ်စားလှယ်လောင်းများ</span>
          </div>
        </AppHeader>
      )}
      <section className="text-center Location">
        <div className="container Location__wrapper">
          <div className="row">
            <div className="col-12">
              <div className="people-icon">{ActivePeopleIcon}</div>
              <p className="text-center">
                မိမိ မဲပေးရွေးချယ်ရမည့် လွှတ်တော်ကိုယ်စားလှယ််လောင်းများကို
                သိရှိရန် နေထိုင်ရာအရပ်ကို ရွေးပါ
              </p>
              <div className="my-2" />
              <button
                className="locationSelector"
                type="button"
                onClick={onClickChooseTownship}
              >
                <span>
                  {township || 'မြို့နယ်'}{' '}
                  <i className="material-icons vert-align-middle">
                    expand_more
                  </i>
                </span>
              </button>
              <button
                disabled={!township}
                className="locationSelector"
                type="button"
                onClick={onClickChooseWardVillage}
              >
                <span>
                  {wardVillage || 'ရပ်ကွက်/ကျေးရွာအုပ်စု'}{' '}
                  <i className="material-icons vert-align-middle">
                    expand_more
                  </i>
                </span>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                type="button"
                disabled={!wardVillage}
                className="Location__done"
                onClick={onClickDone}
              >
                <i className="material-icons">done</i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <TownshipModal
        isModalOpen={townshipModalOpen}
        setModalOpen={setTownshipModalOpen}
        onClickTownship={onClickTownship}
      />
      <WardVillageModal
        isModalOpen={wardVillageModalOpen}
        setModalOpen={setWardVillageModalOpen}
        stateRegion={stateRegion}
        township={township}
        onClickWardVillage={onClickWardVillage}
      />
    </Layout>
  );
};

export default Location;
