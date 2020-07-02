import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Common/Modal/Modal';

import './location.scss';

export default function Location(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    setModalOpen(!isModalOpen);
  }

  return (
    <Layout shouldHideBottomNav>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}>
          OK
      </Modal>
      <section className="text-center">
        <div className="container">
        <div className="col-xs-12">
          <p>Please select your township to know the candidate of your location</p>

          <div className="my-2"></div>
          <p>Select State/Division</p>

          <button className="locationSelector" type="button" onClick={toggleModal}>
            <span>Choose</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(67,67,67,1)"/></svg>
          </button>

          <p>Select Township</p>

          <button className="locationSelector" type="button" onClick={toggleModal}>
            <span>Choose</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(67,67,67,1)"/></svg>
          </button>
        </div>
      </div>
    </section>
    </Layout>
  );
}