import moment, { parseTwoDigitYear } from 'moment';
import Head from 'next/head';
import myanmarNumber from 'myanmar-numbers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import PeopleFillIcon from '../../components/Common/Icons/activePeople';
import CandidateList from '../../components/Candidates/CandidateList/CandidateList';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import { formatHouse, formatConstituency, formatBirthDay } from '../../utils/textFormatter';
import MaePaySohAPI from '../../gateway/api';
import { fetchToken } from '../api/auth';

import './candidate.module.scss';
import { useEffect, useState } from 'react';

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
      individual_logo: individualLogo,
      constituency: {
        id: constituencyId,
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
    id: partyId,
    attributes: {
      seal_image: partySealImage,
      flag_image: partyFlag,
      name_burmese: partyName,
    } = {},
  } = party || {};

  const [competitors, setCompetitors] = useState([]);
  const router = useRouter();

  async function fetchCompetitors() {
    const response = await fetch(`/api/candidates?constituency_id=${constituencyId}`);
    const { data: candidates } = await response.json();

    // Filter based on constituency id
    const filteredCandidates = candidates
      .filter((candidate) => candidate.attributes.constituency.id === constituencyId)
      .filter((candidate) => candidate.id !== id);
    setCompetitors(filteredCandidates);
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Quick hack to fake page reload
    fetchCompetitors();
  }, [constituencyId, id]);

  return (
    <Layout>
      <Head>
        <title>{name} | mVoter 2020</title>

        <meta name="title" content={name} />
        <meta name="description" content={`${stateRegion}၊ ${constituencyName} တွင် ဝင်ရောက်ယှဥ်ပြိုင်မည်`} />

        <meta property="og:url" content={`https://web.mvoterapp.com/candidates/${id}`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${name} - ${partyName ?? 'တစ်သီးပုဂ္ဂလ'}`} />
        <meta property="og:description" content={`${stateRegion}၊ ${constituencyName} တွင် ဝင်ရောက်ယှဥ်ပြိုင်မည်`} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={`https://web.mvoterapp.com/candidates/${id}`} />
        <meta property="twitter:title" content={`${name} - ${partyName ?? 'တစ်သီးပုဂ္ဂလ'}`} />
        <meta property="twitter:description" content={`${stateRegion}၊ ${constituencyName} တွင် ဝင်ရောက်ယှဥ်ပြိုင်မည်`} />
        <meta property="twitter:image" content={image} />
      </Head>
      <AppHeader>
        <a>
          <i className="material-icons" onClick={() => router.replace('/candidates')}>arrow_back</i>
        </a>
      </AppHeader>
      <section className="Candidate">
        <div className="row">
          <div className="col-xs-12 col-lg-3">
            <div className="Candidate__imageWrapper">
              {/* <img src={image} className="Candidate__image" alt={name}/> */}
              <div className="Candidate__image" style={{ backgroundImage: `url("${image}")` }}></div>
              {/* <div className="Candidate__winner">
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="white" width="12px" height="18px"><g><rect fill="none" height="24" width="24" x="0"/><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/></g></svg>
                အနိုင်ရ</div> */}
            </div>
          </div>
          <div className="col-xs-12 col-lg-9 Candidate__infoHeaderWrapper">
            <h1 className="Candidate__name">{name}</h1>
            <div className="">
              <img src={partySealImage ?? individualLogo} alt={partyName} className="Candidate__partyFlag" />
              <div className="Candidate__party">
                {
                  partyName &&
                    <>
                      <Link href={`/parties/${partyId}`}>
                        <span className="Candidate__partyName">{partyName} <i className="material-icons">chevron_right</i></span>
                      </Link>
                    </>
                }
                {
                  !partyName && <span>တစ်သီးပုဂ္ဂလ</span>
                }
              </div>
            </div>
            <div className="Candidate__constituency">
              <span>{constituencyName}</span>
            </div>
          </div>
        </div>
        <div className="row align-items-center Candidate__info" style={{ marginTop: 12 }}>
          <div className="col-xs-3 offset-lg-3 col-lg-3">
            <span className="Candidate__age">
              {myanmarNumber(age, 'my')}
            </span>
            &nbsp; နှစ်
          </div>
          <div className="col-xs-9 col-lg-3">
            <div className="Candidate__infoLabel">
              မွေးသက္ကရာဇ်
            </div>
            <div className="Candidate__infoAnswer">
              {formatBirthDay(birthday)}
            </div>
          </div>
        </div>

        <div className="row Candidate__info">
          <div className="col-xs-12 offset-lg-3 col-lg-3">
            <div className="Candidate__infoLabel">ပညာအရည်အချင်း</div>
            <div className="Candidate__infoAnswer">{education}</div>
          </div>
          <div className="col-xs-12 col-lg-3">
            <div className="Candidate__infoLabel">အလုပ်အကိုင်</div>
            <div className="Candidate__infoAnswer">{work}</div>
          </div>
          <div className="col-xs-12 col-lg-3">
            <div className="Candidate__infoLabel">လူမျိုး၊ ဘာသာ</div>
            <div className="Candidate__infoAnswer">{ethnicity}၊ {religion}</div>
          </div>
        </div>
        <div className="row Candidate__info">
          <div className="col-xs-2 offset-lg-3 col-lg-3 parent-name">မိခင်</div>
          <div className="col-xs-10 offset-lg-3 col-lg-6 parent-info">
            <div>
              <div className="Candidate__infoLabel">
                အမည်
              </div>
              {mother.name}
            </div>
            <div>
              <div className="Candidate__infoLabel">
                လူမျိုး
              </div>
              {mother.ethnicity}
            </div>
            <div>
              <div className="Candidate__infoLabel">
                ဘာသာ
              </div>
              {mother.religion}
            </div>
          </div>
        </div>
        <div className="row Candidate__info">
          <div className="col-xs-2 offset-lg-3 col-lg-3 parent-name">ဖခင်</div>
          <div className="col-xs-10 offset-lg-3 col-lg-6 parent-info">
            <div>
              <div className="Candidate__infoLabel">
                အမည်
              </div>
              {father.name}
            </div>
            <div>
              <div className="Candidate__infoLabel">
                လူမျိုး
              </div>
              {father.ethnicity}
            </div>
            <div>
              <div className="Candidate__infoLabel">
                ဘာသာ
              </div>
              {father.religion}
            </div>
          </div>
        </div>

        <div className="row competitors-wrapper">
          <div className="col-xs-12 text-center">
            {PeopleFillIcon}
            <p className="text-bold competitors-text">ပြိုင်ဘက် ကိုယ်စားလှယ်လောင်းများ</p>
          </div>
        </div>

        <CandidateList candidates={competitors} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {
    params,
  } = context;

  const token = await fetchToken(context);
  const api = new MaePaySohAPI(token);

  const response = await api.getCandidateById(params.candidate);
  const { data } = response.data;

  return {
    props: {
      candidate: { ...data, ...data.attributes },
    },
  };
}

export default Candidates;
