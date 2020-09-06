import PartyItem from '../PartyItem/PartyItem';
import './PartyList.scss';

const PartyList = ({ parties = [] }) => {
  return (
    <ul className="PartyList">
      {
        parties.map((party) => (
          <PartyItem key={party.id} party={party} />
        ))
      }
    </ul>
  );
}

export default PartyList;
