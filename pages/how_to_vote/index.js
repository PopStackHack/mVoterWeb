import Head from 'next/head';

import Layout from '../../components/Layout/Layout';
import Clock6AM from '../../components/Common/Icons/clock6AM';
import Clock4PM from '../../components/Common/Icons/clock4PM';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';

import './HowToVote.module.scss';

export default function howToVote() {
  return (
    <Layout>
      <Head>
        <title>မဲပေးနည်း</title>
      </Head>
      <AppHeader>
        <span className="text-bold">မဲပေးနည်း</span>
      </AppHeader>
      <section className="HowToVote">
        <div className="row my-1">
          <div className="col-12">
            <div className="HowToVote__announcement text-center">
              <span className="title">(၂၀၂၀) ခုနှစ် အထွေထွေရွေးကောက်ပွဲနေ့</span>
              <br />
              <span className="date">နိုဝင်ဘာလ (၈) ရက်</span>
              <br/>
              <span className="day">တနင်္ဂနွေနေ့</span>
              <br/>
              <div className="HowToVote__votingTime">
                <div className="opening-time">
                  <span className="pre">
                    <Clock6AM />&nbsp; မဲရုံဖွင့်ချိန်
                  </span>
                  <br/>
                  <span>
                    နံနက်(၆)နာရီ
                  </span>
                </div>
                <div className="closing-time">
                  <span className="pre">
                    <Clock4PM />&nbsp; မဲရုံပိတ်ချိန်
                  </span>
                  <br/>
                  <span>
                    ညနေ(၄)နာရီ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-12">
            <div className="title">ရွေးကောက်ပွဲနေ့တွင်</div>
            <div className="instruction-list">
              <div className="instruction">
                ရပ်ကွက်/ကျေးရွာအုပ်စု အတွင်းရှိ မိမိ မဲပေးရမည့် မဲရုံသို့သွားပါ။
              </div>
            </div>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-12">
            <div className="title">
              ပြည်သူ့လွှတ်တော် ကိုယ်စားလှယ် ရွေးချယ်ရန်
            </div>
            <div className="instruction-list">
              <div className="instruction">
                ပြည်သူ့လွှတ်တော် ကိုယ်စားလှယ် ဆန္ဒမဲအတွက် မဲစာရင်းစစ်သူထံ သွားရောက်၍ မှတ်ပုံတင်ပြသပါ။
              </div>
              <div className="instruction">
                မဲစာရင်းတွင် မိမိအမည်ပါလျှင် မဲလက်မှတ် ထုတ်ပေးသူထံမှ မဲလက်မှတ် ရယူပါ။
              </div>
              <div className="instruction">
                လျှို့ဝှက်ဆန္ဒမဲပေးခန်းသို့ သွား၍ မိမိနှစ်သက်ရာ ကိုယ်စားလှယ်လောင်း၏ အကွက်တွင် တံဆိပ်တုံးနှိပ်ပါ။
              </div>
              <div className="instruction">
                ပြည်သူ့လွှတ်တော် ကိုယ်စားလှယ် ဆန္ဒမဲပုံး ရှိရာသို့သွား၍ မဲပုံးထဲသို့ မဲလက်မှတ်ကိုထည့်ပါ။
              </div>
          </div>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-12">
            <div className="title">
              တိုင်းရင်းသားလူမျိုး ကိုယ်စားလှယ် ရွေးချယ်ရန်ရှိပါက
            </div>
            <div className="instruction">
              တိုင်းရင်းသားလူမျိုး ကိုယ်စားလှယ် ဆန္ဒမဲအတွက် မဲစာရင်းစစ်သူထံ သွားရောက်၍ မှတ်ပုံတင်ပြသပါ။
            </div>
            <div className="instruction">
              မဲစာရင်းတွင် မိမိအမည်ပါလျှင် မဲလက်မှတ် ထုတ်ပေးသူထံမှ မဲလက်မှတ် ရယူပါ။
            </div>
            <div className="instruction">
              လျှို့ဝှက်ဆန္ဒမဲပေးခန်းသို့ သွား၍ မိမိနှစ်သက်ရာ ကိုယ်စားလှယ်လောင်း၏ အကွက်တွင် တံဆိပ်တုံးနှိပ်ပါ။
            </div>
            <div className="instruction">
              တိုင်းရင်းသားလူမျိုး ကိုယ်စားလှယ် ဆန္ဒမဲပုံး ရှိရာသို့သွား၍ မဲပုံးထဲသို့ မဲလက်မှတ်ကိုထည့်ပါ။
            </div>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-12">
            <div className="title">
              အထက်ပါ အဆင့်များ လုပ်ဆောင်ပြီးလျှင်
            </div>
            <div className="instruction">
              မဲပေးပြီးကြောင်း မင်တို့မည့် မဲရုံအဖွဲ့ဝင်ထံ သွားရောက်၍
              မိမိ၏ လက်ဝဲဘက် လက်သန်းတွင် မင်တို့ပါ
            </div>
            <div className="instruction">
              မဲရုံအတွင်းမှ ထွက်နိုင်ပါပြီ။ သင် နိုင်ငံသားတစ်ယောက်၏ တာဝန်
              ကျေပွန်ခဲ့ပြီ ဖြစ်သည်။
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}