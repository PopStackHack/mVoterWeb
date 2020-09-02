import React, { useState } from 'react';
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

import './location.module.scss';
import Link from 'next/link';

const Location = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [townshipModalOpen, setTownshipModalOpen] = useState(false);
  const router = useRouter();

  function toggleModal() {
    setModalOpen(!isModalOpen);
  }

  function onClickDone() {
    router.push('/candidates');
  }

  function onClickChooseTownship() {
    setTownshipModalOpen(true);
  }

  return (
    <Layout shouldHideBottomNav>
      <Head>
        <title>မဲဆန္ဒနယ်ရွေးရန်</title>
      </Head>
      <AppHeader>
        <div className="vert-flex-center">
          <Link href="/candidates"><i className="material-icons">arrow_back</i></Link>
          <span className="d-inline-block ml-3">ကိုယ်စားလှယ်လောင်းများ</span>
        </div>
      </AppHeader>
      <section className="text-center Location">
        <div className="container Location__wrapper">
          <div className="col-xs-12">
            <div className="people-icon">
              {ActivePeopleIcon}
            </div>
            <p className="text-center">မိမိ မဲပေးရွေးချယ်ရမည့် ကိုယ်စားလှယ်လွှတ်တော်လောင်းများကို သိရှိရန် နေထိုင်ရာအရပ်ကို ရွေးပါ</p>
            <div className="my-2"></div>

              <button className="locationSelector" type="button" onClick={onClickChooseTownship}>
                <span>မြို့နယ်</span>
              </button>

              <button className="locationSelector" type="button" onClick={toggleModal}>
                <span>ရပ်ကွက်/ကျေးရွာအုပ်စု</span>
              </button>

          </div>
        </div>
      </section>
      <TownshipModal
        isModalOpen={townshipModalOpen}
        setModalOpen={setTownshipModalOpen}
      />
    </Layout>
  );
}

export default Location;
