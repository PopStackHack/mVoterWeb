import PartyItem from '../PartyItem/PartyItem';
import './PartyList.scss';

const PartyList = ({ parties = [] }) => {
  return (
    <ul className="PartyList row no-gutters">
      {
        parties.map((party) => (
          <li key={party.id} className="col-lg-6 col-xs-12 PartyList__itemWrapper">
            <PartyItem party={party} />
          </li>
        ))
      }
    </ul>
  );
}

export default PartyList;
