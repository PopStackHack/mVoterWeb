import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Common/Modal/Modal';
import ActivePeopleIcon from '../../components/Common/Icons/activePeople'
import Button from '../../components/Common/Button/Button';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import TownshipModal from '../../components/Location/TownshipModal';
import WardVillageModal from '../../components/Location/WardVillageModal';

import './location.module.scss';
import Link from 'next/link';
import { hasFullLocation } from '../../utils/helpers';

const Location = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
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
    }
  }, []);

  function toggleModal() {
    setModalOpen(!isModalOpen);
  }

  function onClickDone() {
    localStorage.setItem('stateRegion', stateRegion);
    localStorage.setItem('township', township);
    localStorage.setItem('wardVillage', wardVillage);
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
        <title>မဲဆန္ဒနယ်ရွေးရန်</title>
      </Head>
      {
        !isAppStart &&
          <AppHeader>
            <div className="vert-flex-center">
              <Link href="/candidates"><i className="material-icons">arrow_back</i></Link>
              <span className="d-inline-block ml-3">ကိုယ်စားလှယ်လောင်းများ</span>
            </div>
          </AppHeader>
      }
      <section className="text-center Location">
        <div className="container Location__wrapper">
          <div className="row">
            <div className="col-xs-12">
              <div className="people-icon">
                {ActivePeopleIcon}
              </div>
              <p className="text-center">မိမိ မဲပေးရွေးချယ်ရမည့် ကိုယ်စားလှယ်လွှတ်တော်လောင်းများကို သိရှိရန် နေထိုင်ရာအရပ်ကို ရွေးပါ</p>
              <div className="my-2"></div>
                <button className="locationSelector" type="button" onClick={onClickChooseTownship}>
                  <span>{ township || 'မြို့နယ်' }</span>
                </button>
                <button disabled={!township} className="locationSelector" type="button" onClick={onClickChooseWardVillage}>
                  <span>{ wardVillage || 'ရပ်ကွက်/ကျေးရွာအုပ်စု' }</span>
                </button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <button
                disabled={!wardVillage}
                className="Location__done"
                onClick={onClickDone}
                ><i className="material-icons">done</i></button>
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
}

export default Location;
