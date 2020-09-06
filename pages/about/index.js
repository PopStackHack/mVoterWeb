import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';

import './about.module.scss'
const About = () => {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>About | mVoter 2020</title>
      </Head>
      <AppHeader>
        <i className="material-icons" onClick={() => router.back()}>arrow_back</i>
      </AppHeader>
      <section className="About container">
        <div className="row text-center my-3">
          <div className="col-xs-12">
            <img src="/about/mvoter2020_new_logo.png" alt="mVoter Logo" className="mVoterLogo"/>
            <h1>mVoter</h1>
            <p>Award-winning voter education app for Myanmar elections since 2015.</p>
            <br />
            <p>Proudly and voluntarily presented by</p>
          </div>

          <img src="/about/popstack_logo.webp" alt="PopStack" className="PopStack"/>
        </div>

        <p className="text-center">Supported by</p>

        <div className="row text-center my-3">
          <div className="col-xs-4">
            <img src="/about/UEC_logo_mm.png" alt="UEC Logo"/>
          </div>
          <div className="col-xs-4">
            <img src="/about/taf_logo.webp" alt="TAF Logo"/>
          </div>
          <div className="col-xs-4">
            <img src="/about/maepaysoh.png" alt="Maepaysoh Logo"/>
          </div>
          <div className="col-xs-4">
            <img src="/about/step_logo.webp" alt="Step Logo"/>
          </div>
          <div className="col-xs-4">
            <img src="/about/idea_logo.webp" alt="IDEA Logo"/>
          </div>
          <div className="col-xs-4">
            <img src="/about/eu_logo.webp" alt="EU Logo"/>
          </div>
        </div>

        <div className="row text-center my-3">
          <div className="col-xs-12">မေးမြန်းအကြံပြုလိုပါက ဆက်သွယ်ရန်</div>
          <div className="col-xs-12 suggestive-links">
            <a href="//m.me/mvoterapp" target="_blank" rel="noopener">
              <i className="material-icons">facebook</i>
            </a>
            <a href="mailto:popstackhack@gmail.com">
              <i className="material-icons">email</i>
            </a>
            <a href="//mvoterapp.com" target="_blank" rel="noopener">
              <i className="material-icons">language</i>
            </a>
          </div>
          <div className="col-xs-12">&#169;2015-2020 Team PopStack. All rights reserved.</div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
