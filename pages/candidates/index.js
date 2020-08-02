import React, { PureComponent } from 'react';
import Layout from '../../components/Layout/Layout';
import CandidateHeader from '../../components/Candidates/CandidateHeader/CandidateHeader';
import { TabPanel, Tab } from '../../components/Common/Tabs';

import './candidates.module.scss';
import CandidateList from '../../components/Candidates/CandidateList/CandidateList';

const amyothaHluttaw = <div className="text-center">အမျိုးသား<br />လွှတ်တော်</div>;
const pyithuHlutTaw = <div className="text-center">ပြည်သူ့<br />လွှတ်တော်</div>;
const tineHlutTaw = <div className="text-center">တိုင်းဒေသကြီး<br />လွှတ်တော်</div>;

class Candidates extends PureComponent {
  render() {
    return (
      <Layout>
        <CandidateHeader />
        <TabPanel>
          <Tab title={amyothaHluttaw} key="amyothahluttaw">
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
          </Tab>
          <Tab title={pyithuHlutTaw} key="pyithuhluttaw">
            <CandidateList />
          </Tab>
          <Tab title={tineHlutTaw} key="tinehluttaw">
            <CandidateList />
          </Tab>
        </TabPanel>
      </Layout>
    );
  }
}

export default Candidates;
