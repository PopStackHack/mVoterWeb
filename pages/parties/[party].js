import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';

import './party.module.scss';

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
        <div className="Party__headInfo row text-center">
          <div className="col-12">
            <div className="Party__imageWrapper">
              <div className="Party__image" style={{ backgroundImage: `url(https://placehold.co/150x150)` }}></div>
            </div>
            <h1 className="Party__title">ဖရဲသီး ဖွံ့ဖြိုးတိုးတက်ရေး အကျိုးဆောင်ပါတီ</h1>
            <h2 className="Party__engTitle">Water Melon Development Party</h2>
            <h3 className="Party__abbreviation">WDP</h3>
          </div>
          <div className="Party__partyPolicy">
            ပါတီ မူဝါဒ
          </div>
        </div>
        <div className="row Party__info">
          <div className="col-3">
            <div className="Party__seal" style={{ backgroundImage: `url(https://placehold.co/150x80)` }}></div>
          </div>
          <div className="col-9">
            <div className="Party__infoLabel">
              ပါတီအမှတ်စဥ်
            </div>
            <div className="Party__infoAnswer">
              ၉၆
            </div>
          </div>
        </div>
        <div className="row Party__info">
          <div className="col-12">
            <div className="Party__infoLabel">
              ပါတီဥက္ကဌနှင့် ဗဟိုအလုပ်အမှုဆောင်များ
            </div>
            <div className="Party__infoAnswer">
              ဦးအာလူး၊ ဒေါ်မုန်လာဥ
            </div>
          </div>
        </div>
        <div className="row Party__info">
          <div className="col-12">
            <div className="Party__infoLabel">
              အမှုဆောင်များ
            </div>
            <div className="Party__infoAnswer">
              ဦးအာလူး၊ ဒေါ်မုန်လာဥ
            </div>
          </div>
        </div>
        <div className="row Party__info">
          <div className="col-12">
            <div className="Party__infoLabel">
              အဖွဲ့ဝင်ဦးရေ
            </div>
            <div className="Party__infoAnswer">
              ၄၁၀၅၆
            </div>
          </div>
        </div>
        <div className="row Party__info">
          <div className="col-12">
            <div className="Party__infoLabel">
              ပါတီရုံးချုပ်
            </div>
            <div className="Party__infoAnswer">
              ၁၀၊ ငါးထပ်ကြီးဘုရားလမ်း၊ ဗဟန်းမြို့နယ်၊ ရန်ကုန်တိုင်းဒေသကြီး
            </div>
          </div>
        </div>
        <div className="row Party__info">
          <div className="col-12">
            <div className="Party__infoLabel">
              ဆက်သွယ်ရန်
            </div>
            <div className="Party__infoAnswer">
              ၀၉၄၂၈၂၁၉၀၈၆၊ ၀၉၄၂၈၂၁၉၀၈၇
            </div>
          </div>
        </div>
        <div className="row-fluid Party__info Party__timeline">
          <div className="row timeline-item">
            <div className="col-3 time text-right"><div className="date">Feb 4</div>2019</div>
            <div className="col-9 description">
              ပါတီ တည်ထောင်ခွင့်လျှောက်ထားသည်
            </div>
          </div>
          <div className="row timeline-item">
            <div className="col-3 time text-right"><div className="date">Mar 3</div>2019</div>
            <div className="col-8 description">
              ပါတီ တည်ထောင်ခွင့် ရရှိသည်
            </div>
          </div>
          <div className="row timeline-item">
            <div className="col-3 time text-right"><div className="date">Apr 2</div>2019</div>
            <div className="col-9 description">
              ပါတီအဖြစ် မှတ်ပုံတင်ခွင့် လျှောက်ထားသည်
            </div>
          </div>
          <div className="row timeline-item">
            <div className="col-3 time text-right"><div className="date">May 30</div>2019</div>
            <div className="col-9 description">
              ပါတီအဖြစ် မှတ်ပုံတင်ခွင့် ရရှိသည်
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartyDetail;
