import moment, { parseTwoDigitYear } from 'moment';
import Head from 'next/head';
import myanmarNumber from 'myanmar-numbers';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import { formatHouse, formatConstituency } from '../../utils/textFormatter';
import MaePaySohAPI from '../../gateway/api';
import { extractMPSToken } from '../../utils/authClient';

import './candidate.module.scss';

const Candidates = (props) => {
  const {
    candidate: {
      id,
      name,
      image,
      education,
      work,
      birthday,
      age,
      mother,
      father,
      ethnicity,
      religion,
      constituency: {
        attributes: {
          state_region: stateRegion,
          name: constituencyName,
          house,
        }
      },
      party,
    },
  } = props;

  const {
    attributes: {
      name_burmese: partyName,
    } = {},
  } = party || {};

  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{name} | mVoter 2020</title>
        <meta property="og:url" content={`//web.mvoterapp.com/candidates/${id}`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${formatHouse(house)} ကိုယ်စားလှယ် - ${name}`} />
        <meta property="og:description" content={`${stateRegion}-${constituencyName} တွင် ဝင်ရောက်ယှဥ်ပြိုင်မည်`} />
        <meta property="og:image" content={image} />
      </Head>
      <AppHeader>
        <div>
          <i className="material-icons" onClick={() => router.back()}>arrow_back</i>
        </div>
      </AppHeader>
      <section className="Candidate container">
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
            <div className="Candidate__party">
              {
                partyName && <span>{partyName}</span>
              }
              {
                !partyName && <span>တစ်သီးပုဂ္ဂလ</span>
              }
            </div>
            <div className="Candidate__senate">{formatHouse(house)}</div>
            <div className="Candidate__constituency">
              <span>{formatConstituency(stateRegion, constituencyName)}</span>
            </div>
          </div>
        </div>
        <div className="row align-items-center Candidate__info" style={{ marginTop: 12 }}>
          <div className="col-3">
            <span className="Candidate__age">
              {myanmarNumber(age, 'my')}
            </span>
            &nbsp; နှစ်
          </div>
          <div className="col">
            <div className="Candidate__infoLabel">
              မွေးသက္ကရာဇ်
            </div>
            <div className="Candidate__infoAnswer">
              {birthday}
            </div>
          </div>
        </div>

        <div className="row Candidate__info">
          <div className="col">
            <div className="Candidate__infoLabel">ပညာအရည်အချင်း</div>
            <div className="Candidate__infoAnswer">{education}</div>
          </div>
        </div>
        <div className="row Candidate__info">
          <div className="col">
            <div className="Candidate__infoLabel">အလုပ်အကိုင်</div>
            <div className="Candidate__infoAnswer">{work}</div>
          </div>
        </div>
        <div className="row Candidate__info">
          <div className="col">
            <div className="Candidate__infoLabel">လူမျိုး၊ ဘာသာ</div>
            <div className="Candidate__infoAnswer">{ethnicity}၊ {religion}</div>
          </div>
        </div>
        <div className="row Candidate__info">
          <div className="col-2">မိခင်</div>
          <div className="col">
            {mother.name} <br />
            {mother.religion}ဘာသာ
          </div>
        </div>
        <div className="row">
          <div className="col-2">ဖခင်</div>
          <div className="col">
            {father.name} <br />
            {father.religion}ဘာသာ
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {
    params,
  } = context;


  const token = extractMPSToken(context.req.headers.cookie);
  const api = new MaePaySohAPI(token);

  const response = await api.getCandidateById(params.candidate);
  const { data } = response.data;

  return {
    props: {
      candidate: data.attributes,
    },
  };
}

export default Candidates;
