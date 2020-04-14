import Button from '../../Common/Button/Button';
import './CandidateHeader.scss';

const CandidateHeader = () => {
  return (
    <div className="CandidateHeader">
      <div>ကိုယ်စားလှယ်လောင်းများ</div>
      <div className="CandidateHeader__buttonGroup">
        <Button className="CandidateHeader__button"><i className="material-icons">location_on</i></Button>
        <Button className="CandidateHeader__button"><i className="material-icons">search</i></Button>
      </div>
    </div>
  );
}

export default CandidateHeader;
