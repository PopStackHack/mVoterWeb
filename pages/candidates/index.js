import React, { PureComponent } from 'react';
import Layout from '../../components/Layout/Layout';
import CandidateHeader from '../../components/Candidates/CandidateHeader/CandidateHeader';
import { TabPanel, Tab } from '../../components/Common/Tabs';

import './candidates.module.scss';

const amyothaHluttaw = <div className="text-center">အမျိုးသား<br />လွှတ်တော်</div>;
const pyithuHlutTaw = <div className="text-center">ပြည်သူ့<br />လွှတ်တော်</div>;
const tineHlutTaw = <div className="text-center">တိုင်းဒေသကြီး<br />လွှတ်တော်</div>;

class Candidates extends PureComponent {
  render() {
    return (
      <Layout>
        <CandidateHeader />
        <TabPanel>
          <Tab title={amyothaHluttaw}>

          </Tab>
          <Tab title={pyithuHlutTaw}>

          </Tab>
          <Tab title={tineHlutTaw}>

          </Tab>
        </TabPanel>
      </Layout>
    );
  }
}

export default Candidates;
