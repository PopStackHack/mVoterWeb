import moment, { parseTwoDigitYear } from 'moment';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';

import './candidate.module.scss';

const Candidates = (props) => {
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
      <AppHeader></AppHeader>
      <div className="Candidate container">
        <div className="row">
          <div className="col-12">
            <div className="Candidate__imageWrapper">
              <img src="https://picsum.photos/200/200" className="Candidate__image" alt={name}/>
              <div className="Candidate__winner">
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="white" width="12px" height="18px"><g><rect fill="none" height="24" width="24" x="0"/><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/></g></svg>
                အနိုင်ရ</div>
            </div>
          </div>
          <div className="col-12 text-center">
            <h1 className="Candidate__name">{name}</h1>
            <div className="Candidate__party">{party ? party.partyName : 'တစ်သီးပုဂ္ဂလ ကိုယ်စားလှယ်'}</div>
            <div className="Candidate__senate">ပြည်သူ့လွှတ်တော်</div>
            <div className="Candidate__constituency">
              <span>တာမွေမဲဆန္ဒနယ်</span>
            </div>
          </div>
        </div>
        <div className="row align-items-center Candidate__info" style={{ marginTop: 12 }}>
          <div className="col-3">
            <span className="Candidate__age">
              ၃၄
            </span>
            &nbsp; နှစ်
          </div>
          <div className="col">
            <div className="Candidate__infoLabel">
              မွေးသက္ကရာဇ်
            </div>
            <div className="Candidate__infoAnswer">
              ဇန်နဝါရီ ၁၊ ၁၉၈၆
            </div>
          </div>
        </div>

        <div className="row Candidate__info">
          <div className="col">
            <div className="Candidate__infoLabel">ပညာအရည်အချင်း</div>
            <div className="Candidate__infoAnswer">ဓာတုဗေဒ (မဟာဘွဲ့)</div>
          </div>
        </div>
        <div className="row Candidate__info">
          <div className="col">
            <div className="Candidate__infoLabel">အလုပ်အကိုင်</div>
            <div className="Candidate__infoAnswer">အာလူး အရောင်းအဝယ်</div>
          </div>
        </div>
        <div className="row Candidate__info">
          <div className="col">
            <div className="Candidate__infoLabel">လူမျိုး၊ ဘာသာ</div>
            <div className="Candidate__infoAnswer">ဗမာ၊ ဗုဒ္ဓဘာသာ</div>
          </div>
        </div>
        <div className="row Candidate__info">
          <div className="col-2">မိခင်</div>
          <div className="col">
            ဒေါ်ပိန်းဥ <br />
            ဗုဒ္ဓဘာသာ
          </div>
        </div>
        <div className="row">
          <div className="col-2">ဖခင်</div>
          <div className="col">
            ဦးမြေပဲ <br />
            ခရစ်ယာန်
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Candidates;
