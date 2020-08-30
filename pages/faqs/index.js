import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import { useState, useEffect } from 'react';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import FaqItem from '../../components/Faq/FaqItem';

import './faqs.module.scss';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What do you seek?',
      answer: `I'm baby hell of banjo synth literally, photo booth street art gochujang venmo. Gochujang chartreuse scenester, biodiesel waistcoat austin fashion axe coloring book locavore drinking vinegar cloud bread DIY affogato. Gastropub messenger bag hexagon selvage pinterest narwhal locavore waistcoat schlitz green juice succulents leggings, yr readymade affogato. Put a bird on it migas schlitz roof party retro, heirloom pitchfork meh meditation. Helvetica pinterest poke lumbersexual jean shorts, pok pok kickstarter copper mug raclette cold-pressed knausgaard celiac lo-fi cliche.`,
    }
  ]);

  return (
    <Layout>
      <Head>
        <title>သိမှတ်ဖွယ်ရာများ</title>
      </Head>
      <AppHeader>
        <div className="text-bold">သိမှတ်ဖွယ်ရာများ</div>
      </AppHeader>
      <section id="faq" className="container">
        <div className="ballot-stack row align-items-center">
          <div className="col-4">
            <img className="ballot-stack-picture" src="/ballot_stack.png" alt="Ballot Stack"/>
          </div>
          <div className="col-8">ပယ်မဲ၊ ခိုင်လုံမဲ နမူနာများ</div>
        </div>
        <div className="prohibitions row">
          <div className="col-3 prohibition">
            <img src="/prohibition_signs/no_selfie.png" alt="No Selfie"/>
            <div>Selfie <br />မရိုက်ရ</div>
          </div>
          <div className="col-3 prohibition">
            <img src="/prohibition_signs/no_photo.png" alt="No Photo"/>
            <div>ဓာတ်ပုံ <br />မရိုက်ရ</div>
          </div>
          <div className="col-3 prohibition">
            <img src="/prohibition_signs/no_video.png" alt="No Video"/>
            <div>ဗီဒီယို <br />မရိုက်ရ</div>
          </div>
          <div className="col-3 prohibition">
            <img src="/prohibition_signs/no_recording.png" alt="No Recording"/>
            <div>အသံ <br />မသွင်းရ</div>
          </div>
        </div>
        {
          faqs.map(({ id, question, answer }) => {
            return (
              <FaqItem
                key={id}
                question={question}
                answer={answer}
              />
            )
          })
        }
      </section>
    </Layout>
  );
}

export default FAQ;
