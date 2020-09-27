import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/candidates');
  }, []);

  return (
    <div>
      <Head>
        <title>mVoter 2020 Web Application</title>

        <meta name="title" content="mVoter 2020 Web Application" />
        <meta name="description" content="ကိုယ်စားလှယ်လောင်းများ၊ ပါတီများ၊ မဲပေးနည်း၊ သိမှတ်ဖွယ်ရာနှင့် သတင်းများကို အလွယ်တကူ သိရှိနိုင်မယ့် mVoter 2020 App" />

        <meta property="og:url" content="https://web.mvoterapp.com" />
        <meta property="og:title" content="mVoter 2020 Web Application" />
        <meta property="og:description" content="(၂၀၂၀) ခုနှစ်၊ အထွေထွေရွေးကောက်ပွဲ အတွက် ကိုယ်စားလှယ်လောင်းများ၊ ပါတီများ၊ မဲပေးနည်း၊ သိမှတ်ဖွယ်ရာနှင့် သတင်းများကို အလွယ်တကူ သိရှိနိုင်မယ့် mVoter 2020 App" />
        <meta property="og:image" content="/android-chrome-512x512.png" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://web.mvoterapp.com" />
        <meta property="twitter:title" content="mVoter 2020 Web Application" />
        <meta property="twitter:description" content="ကိုယ်စားလှယ်လောင်းများ၊ ပါတီများ၊ မဲပေးနည်း၊ သိမှတ်ဖွယ်ရာနှင့် သတင်းများကို အလွယ်တကူ သိရှိနိုင်မယ့် mVoter 2020 App" />
        <meta property="twitter:image" content="/android-chrome-512x512.png" />
      </Head>
      <Layout />
    </div>
  );
};


export default Home;
