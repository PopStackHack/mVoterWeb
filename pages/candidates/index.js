import React, { PureComponent } from 'react';
import Layout from '../../components/Layout/Layout';
import CandidateHeader from '../../components/Candidates/CandidateHeader/CandidateHeader';
import { TabPanel, Tab } from '../../components/Common/Tabs';

import './candidates.module.scss';
import CandidateList from '../../components/Candidates/CandidateList/CandidateList';

const amyothaHluttaw = <div className="text-center">အမျိုးသား<br />လွှတ်တော်</div>;
const pyithuHlutTaw = <div className="text-center">ပြည်သူ့<br />လွှတ်တော်</div>;
const tineHlutTaw = <div className="text-center">တိုင်းဒေသကြီး<br />လွှတ်တော်</div>;

const VotingPlace = () => (
  <div className="VotingPlace">
    <div className="VotingPlace__container">
      တာမွေ မဲဆန္ဒနယ်
    </div>
  </div>
);

const Candidates = () => {
  return (
    <Layout>
      <CandidateHeader />
      <TabPanel>
        <Tab title={amyothaHluttaw} key="amyothahluttaw">
          <VotingPlace />
          <div className="container">
            <CandidateList
              dataSource={[
                {
                  id: 1,
                  name: 'ဦးကောင်းမြတ်လွင်',
                  party: {
                    name_burmese: 'ချာပါတီ',
                  }
                }
              ]}
            />
          </div>
        </Tab>
        <Tab title={pyithuHlutTaw} key="pyithuhluttaw">
          <div className="container">
            <CandidateList />
          </div>
        </Tab>
        <Tab title={tineHlutTaw} key="tinehluttaw">
          <div className="container">

          </div>
          <CandidateList />
        </Tab>
      </TabPanel>
    </Layout>
  );
}

export default Candidates;
