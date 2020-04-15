import { PureComponent } from 'react';
import Layout from '../../components/Layout/Layout';
import PartyCard from '../../components/Party/PartyCard';

import './parties.scss';

class Parties extends PureComponent {
  render() {
    return (
      <Layout>
        <div className="Parties__Container">
          <div className="Parties__Wrapper">
            {[0, 1, 2].map((c, i) => <PartyCard key={i} />)}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Parties;
