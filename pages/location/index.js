import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Common/Modal/Modal';
import Button from '../../components/Common/Button/Button';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import { withTranslation } from '../../hoc/i18n';

import './location.scss';
import Link from 'next/link';

const Location = (props) => {
  const { t } = props;
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
          <span className="d-inline-block ml-3">{t('choose-location')}</span>
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
        <p>{t('location-description')}</p>

          <div className="my-2"></div>
          <p>Select State/Division</p>

          <button className="locationSelector" type="button" onClick={toggleModal}>
            <span>Choose</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(67,67,67,1)"/></svg>
          </button>

          <p>Select Township</p>

          <button className="locationSelector" type="button" onClick={toggleModal}>
            <span>Choose</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(67,67,67,1)"/></svg>
          </button>
          <Button className="Button__ChooseLocation" onClick={onClickDone}>Done</Button>
        </div>
      </div>
    </section>
    </Layout>
  );
}

Location.getInitialProps = async () => ({
  namespacesRequired: ['location'],
});

export default withTranslation('location')(Location);
