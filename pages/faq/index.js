import Layout from '../../components/Layout/Layout';
import { useState, useEffect } from 'react';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import FaqItem from '../../components/Faq/FaqItem';

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
      <AppHeader>
        <div className="text-bold">သိမှတ်ဖွယ်ရာများ</div>
      </AppHeader>
      <section id="faq" className="container">
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
