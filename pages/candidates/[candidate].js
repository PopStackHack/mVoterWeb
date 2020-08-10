import moment, { parseTwoDigitYear } from 'moment';
import Layout from '../../components/Layout/Layout';

import './candidateDetail.module.scss';

const CandidateDetails = (props) => {
  const {
    name = 'ဦးဖရဲသီး',
    birthday = moment().toDate,
    education = 'M.B.B.S',
    gender,
    ethnicity = 'ဗမာ',
    religion = 'ဗုဒ္ဓဘာသာ',
    constituency = 'ပြည်သူ့လွှတ်တော်',
    party,
  } = props;

  return (
    <Layout shouldHideBottomNav>
      <div className="CandidateDetail">
        <div className="row">
          <div className="col-12">
            {/* <img src="" className="CandidateDetail__image" alt={name}/> */}
          </div>
          <div className="col-12 text-center">
            <h1 className="CandidateDetail__name">{name}</h1>
            <h2 className="CandidateDetail__party">{party ? party.partyName : 'တစ်သီးပုဂ္ဂလ ကိုယ်စားလှယ်'}</h2>
            <h3 className="CandidateDetail__constituency">{constituency}</h3>
            <div>
              <span>{constituency}</span>
            </div>
          </div>
        </div>
        <div className="row">

        </div>
        <div className="row">

        </div>
        <div className="row">

        </div>
        <div className="row">

        </div>
        <div className="row">

        </div>
        <div className="row">

        </div>
      </div>
    </Layout>
  );
}

export default CandidateDetails;
