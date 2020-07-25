import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Common/Modal/Modal';
import Button from '../../components/Common/Button/Button';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';

import './location.scss';
import Link from 'next/link';

const Location = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  function toggleModal() {
    setModalOpen(!isModalOpen);
  }

  function onClickDone() {
    router.push('/candidates');
  }

  return (
    <Layout shouldHideBottomNav>
      <AppHeader>
        <div className="vert-flex-center">
          <Link href="/candidates"><i className="material-icons">arrow_back</i></Link>
          <span className="d-inline-block ml-3">ကိုယ်စားလှယ်လောင်းများ</span>
        </div>
      </AppHeader>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}>
          OK
      </Modal>
      <section className="text-center">
        <div className="container">
        <div className="col-xs-12">
        <p>သင့်မဲဆန္ဒနယ်မှ ယှဥ်ပြိုင်မည့် လွှတ်တော်ကိုယ်စားလှယ်များကို သိရန် သင်နေထိုင်ရာမြို့နယ်အား ရွေးပါ။</p>
          <div className="my-2"></div>

            <p>သင်နေထိုင်ရာ ပြည်နယ်/တိုင်းဒေသကြီးကို ရွေးပါ။</p>
            <button className="locationSelector" type="button" onClick={toggleModal}>
              <span>ရွေးရန်</span> <i className="material-icons">keyboard_arrow_right</i>
            </button>

            <p>သင်နေထိုင်ရာ မြို့နယ်အား ရွေးပါ။</p>
            <button className="locationSelector" type="button" onClick={toggleModal}>
              <span>ရွေးရန်</span> <i className="material-icons">keyboard_arrow_right</i>
            </button>

            <Button className="Button__ChooseLocation" onClick={onClickDone}>Done</Button>
        </div>
      </div>
    </section>
    </Layout>
  );
}

export default Location;
