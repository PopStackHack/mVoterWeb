import Head from 'next/head';
import { getFAQById } from '../../gateway/api';
import Layout from '../../components/Layout/Layout';
import { formatFAQCategory } from '../../utils/textFormatter';
import MaePaySohAPI from '../../gateway/api';
import { extractMPSToken } from '../../utils/authClient';

import './faq.module.scss';

const FAQ = (props) => {
  const {
    faq: {
      id,
      category,
      question,
      answer,
      source,
      law_source: lawSource,
      article_source: articleSource,
    },
  } = props;

  return (
    <Layout shouldHideBottomNav>
      <Head>
        <title>{formatFAQCategory(category)} သိမှတ်ဖွယ်ရာ | mVoter 2020</title>
        <meta property="og:url" content={`//web.mvoterapp.com/faqs/${id}`} />
        {/* <meta property="og:type" content="profile" /> */}
        <meta property="og:title" content={`${question} - ${formatFAQCategory(category)}`} />
        <meta property="og:description" content={answer}/>
        {/* TODO: Add mVoter Logo as fallback */}
        {/* <meta property="og:image" content={} /> */}
      </Head>
      <section className="FAQ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="FAQ__question">{question}</h1>
              <div className="FAQ__answer" dangerouslySetInnerHTML={{ __html: answer }}></div>
            </div>
          </div>
        </div>
      </section>
      {/* TODO Add more sensible information under this */}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {
    params,
  } = context;
 // IDEA: Could map the snake cased fields dynamically with camel case

  const token = extractMPSToken(context.req.headers.cookie);
  const api = new MaePaySohAPI(token);

  const response = await api.getFAQById(params.faq);

  const { data } = response.data;

  return {
    props: {
      faq: {
        ...data,
        ...data.attributes,
      },
    },
  };
}

export default FAQ;