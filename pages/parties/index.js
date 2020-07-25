import { PureComponent } from 'react';
import Layout from '../../components/Layout/Layout';
import PartyCard from '../../components/Party/PartyCard';

import './parties.module.scss';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import Button from '../../components/Common/Button/Button';

const Parties = (props) => {
  return (
    <Layout>
      <AppHeader>
        <div>ပါတီများ</div>
        <div className="Parties__buttonGroup">
          <Button
            type="primary"
          >
            <i className="material-icons">search</i>
          </Button>
        </div>
      </AppHeader>
      <div className="Parties__Container">
        <div className="Parties__Wrapper">
          {[0, 1, 2].map((c, i) => <PartyCard key={i} />)}
        </div>
      </div>
    </Layout>
  );
}

export default Parties;
