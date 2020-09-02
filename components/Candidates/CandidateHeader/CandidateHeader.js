import Link from 'next/link';
import Button from '../../Common/Button/Button';
import AppHeader from '../../Layout/AppHeader/AppHeader';
import './CandidateHeader.module.scss';

const CandidateHeader = () => {
  return (
    <AppHeader className="CandidateHeader">
      <div className="text-bold">ကိုယ်စားလှယ်လောင်းများ</div>
      <div className="CandidateHeader__buttonGroup">
        <Link href="/location"><a><Button className="CandidateHeader__button"><i className="material-icons">location_on</i></Button></a></Link>
        <Button className="CandidateHeader__button"><i className="material-icons">search</i></Button>
      </div>
    </AppHeader>
  );
}

export default CandidateHeader;
