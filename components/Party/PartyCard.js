import Card from '../Common/Card/Card';

import './PartyCard.module.scss';

const PartyCard = () => {
  return (
    <Card className="PartyCard">
      <div style={{
        width: 64,
        height: 64,
        backgroundImage: `url("//via.placeholder.com/150}")`
      }}></div>
      <div className="PartyCard__Description">
        <div>ပလာတာပါတီ</div>
        <div>Palartar Party</div>
      </div>
    </Card>
  );
};

export default PartyCard;
