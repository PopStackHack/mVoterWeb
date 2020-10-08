import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import { VOTER_LIST_LINKS } from '../../utils/constants';

import './voter_list.module.scss';

const VoterListPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>မဲစာရင်းစစ်ရန် | mVoter 2020</title>
      </Head>
      <AppHeader>
        <div className="d-flex">
          <a>
            <i className="material-icons" onClick={() => router.back()}>
              arrow_back
            </i>
          </a>
          <div className="text-bold ml-2">မဲစာရင်းစစ်ရန်</div>
        </div>
      </AppHeader>
      <section id="VoterList" className="VoterList">
        <p className="text-center text-bold">
          မိမိ အမည်ပါ၊ မပါ မဲစာရင်းစစ်ရန် ရွေးကောက်ပွဲကော်မရှင်မှ တရားဝင် Web
          Application Link များအား အသုံးပြုစစ်ဆေးနိုင်ပါတယ်။
        </p>
        <table className="VoterList__table">
          <thead>
            <tr>
              <th>တိုင်းဒေသကြီး/ပြည်နယ်</th>
              <th>စစ်ဆေးရန် App Link</th>
            </tr>
          </thead>
          <tbody>
            {VOTER_LIST_LINKS.map(({ region, url }, index) => (
              <tr key={index} className="VoterList__item">
                <td>{region}</td>
                <td>
                  <a target="_blank" href={url} rel="noopener noreferrer">
                    {url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default VoterListPage;
