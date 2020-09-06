import { useRouter } from 'next/router';
import Head from 'next/head';
import myanmarNumbers from 'myanmar-numbers';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import MaePaySohAPI from '../../gateway/api';
import { fetchToken } from '../api/auth';

import './party.module.scss';

const Party = (props) => {
  const {
    party: {
      id,
      flag_image: flagImage,
      seal_image: sealImage,
      abbreviation,
      name_burmese: nameBurmese,
      name_english: nameEnglish,
      policy,
      region,
      leaders_and_chairmen: leadership,
      member_count: memberCount,
      headquarter_address: headquarterAddress,
      contacts,
      establishment_application_date: establishmentApplicationDate,
      establishment_approval_date: establishmentApprovalDate,
      registration_application_date: registrationApplicationDate,
      registration_approved_date: registrationApprovedDate,
    },
  } = props;

  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{nameBurmese} | mVoter 2020</title>
        <meta property="og:url" content={`//web.mvoterapp.com/parties/${id}`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={nameBurmese} />
        <meta property="og:description" content={`ယှဥ်ပြိုင်မည့်နေရာ - ${region}`}/>
        <meta property="og:image" content={sealImage} />
      </Head>
      <AppHeader>
        <i className="material-icons" onClick={() => router.back()}>arrow_back</i>
      </AppHeader>
      <section className="Party container">
        <div className="Party__headInfo row text-center">
          <div className="col-12">
            <div className="Party__imageWrapper">
              <div className="Party__seal" style={{ backgroundImage: `url(${sealImage})` }}></div>
            </div>
            <h1 className="Party__title">{nameBurmese}</h1>
            <h1 className="Party__engTitle">{nameEnglish}</h1>
            <p>{region}</p>
            {
              abbreviation &&
                <h3 className="Party__abbreviation">WDP</h3>
            }
          </div>
          <a className="d-block" href={policy} target="_blank" rel="noopener">
            <div className="Party__partyPolicy">
              ပါတီ မူဝါဒ
            </div>
          </a>
        </div>
        <div className="row Party__info">
          <div className="col-3">
            <div className="Party__flag" style={{ backgroundImage: `url(${flagImage})` }}></div>
          </div>
          <div className="col-9">
            <div className="Party__infoLabel">
              ပါတီအမှတ်စဥ်
            </div>
            <div className="Party__infoAnswer">
              {myanmarNumbers(id, 'my')}
            </div>
          </div>
        </div>
        <div className="row Party__info">
          <div className="col-12">
            <div className="Party__infoLabel">
              ခေါင်းဆောင်နှင့် အမှုဆောင်များ
            </div>
            <div className="Party__infoAnswer">
              {leadership.join('၊ ')}
            </div>
          </div>
        </div>
        <div className="row Party__info">
          <div className="col-12">
            <div className="Party__infoLabel">
              အဖွဲ့ဝင်ဦးရေ
            </div>
            <div className="Party__infoAnswer">
              {myanmarNumbers(memberCount, 'my')} ယောက်
            </div>
          </div>
        </div>
        <div className="row Party__info">
          <div className="col-12">
            <div className="Party__infoLabel">
              ပါတီရုံးချုပ်
            </div>
            <div className="Party__infoAnswer">
              {headquarterAddress}
            </div>
          </div>
        </div>
        <div className="row Party__info">
          <div className="col-12">
            <div className="Party__infoLabel">
              ဆက်သွယ်ရန်
            </div>
            <div className="Party__infoAnswer">
              {contacts.join('၊ ')}
            </div>
          </div>
        </div>
        <div className="row-fluid Party__info Party__timeline">
          <p className="text-center">နိုင်ငံရေးပါတီအဖြစ် ပုဒ်မ(၂၅)အရ လျှောက်ထားခဲ့သည်</p>
            {
              establishmentApplicationDate &&
                <div className="row timeline-item">
                  <div className="col-4 time text-right">{establishmentApplicationDate}</div>
                  <div className="col-8 description">
                    ပါတီ တည်ထောင်ခွင့်လျှောက်ထားသည်
                  </div>
                </div>
            }
            {
              establishmentApprovalDate &&
                <div className="row timeline-item">
                  <div className="col-4 time text-right">{establishmentApprovalDate}</div>
                  <div className="col-8 description">
                    ပါတီ တည်ထောင်ခွင့် ရရှိသည်
                  </div>
                </div>
            }
            {
              registrationApplicationDate &&
                <div className="row timeline-item">
                  <div className="col-4 time text-right">{registrationApplicationDate}</div>
                  <div className="col-8 description">
                    ပါတီအဖြစ် မှတ်ပုံတင်ခွင့် လျှောက်ထားသည်
                  </div>
                </div>
            }
            {
              registrationApprovedDate &&
                <div className="row timeline-item">
                  <div className="col-4 time text-right">{registrationApprovedDate}</div>
                  <div className="col-8 description">
                    ပါတီအဖြစ် မှတ်ပုံတင်ခွင့် ရရှိသည်
                  </div>
                </div>
            }
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const {
    params,
  } = context;

  const token = await fetchToken(context);
  const api = new MaePaySohAPI(token);

  const response = await api.getPartyById(params.party);
  const { data } = response.data;

  // expand everything inside data attributes to primary object
  return {
    props: {
      party: {
        ...data,
        ...data.attributes,
      },
    },
  };
}

export default Party;
