import React, { PureComponent } from 'react';
import Layout from '../../components/Layout/Layout';
import CandidateHeader from '../../components/Candidates/CandidateHeader/CandidateHeader';
import { TabPanel, Tab } from '../../components/Common/Tabs';

import './candidates.scss';

class Candidates extends PureComponent {
  render() {
    return (
      <Layout>
        <CandidateHeader />
        <TabPanel>
          <Tab title="အမျိုးသားလွှတ်တော်">
            အမျိုးသားလွှတ်တော်
          </Tab>
          <Tab title="ပြည်သူ့လွှတ်တော်">
            ပြည်သူ့လွှတ်တော်
          </Tab>
          <Tab title="တိုင်းဒေသကြီးလွှတ်တော်">
            တိုင်းဒေသကြီးလွှတ်တော်
          </Tab>
        </TabPanel>
      </Layout>
    );
  }
}

export default Candidates;
