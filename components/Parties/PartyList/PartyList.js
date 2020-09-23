import PartyItem from '../PartyItem/PartyItem';
import './PartyList.scss';

const PartyList = ({ parties = [] }) => {
  return (
    <div className="container-lg-fluid">
      <ul className="PartyList row no-gutters">
        {
          parties.map((party, index) => (
            <li key={index} className="col-lg-6 col-12 PartyList__itemWrapper">
              <PartyItem party={party} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default PartyList;
