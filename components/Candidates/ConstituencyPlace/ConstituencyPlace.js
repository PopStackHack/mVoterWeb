import './ConstituencyPlace.scss';

const ConstituencyPlace = ({ className, place }) => (
  <div className={`ConstituencyPlace ${className ?? ''}`}>
    <div className="ConstituencyPlace__container">{place}</div>
  </div>
);

export default ConstituencyPlace;
