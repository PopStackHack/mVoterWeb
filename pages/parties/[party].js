import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';

const PartyDetail = () => {
  const router = useRouter();

  return (
    <Layout>
      <AppHeader>
        <div>
          <i className="material-icons" onClick={() => router.back()}>arrow_back</i>
        </div>
      </AppHeader>
      <section className="Party container">
        <div className="row">

        </div>
      </section>
    </Layout>
  );
};

export default PartyDetail;
