import Head from 'next/head';
import MaePaySohAPI from '../../gateway/api';
import Layout from '../../components/Layout/Layout';
import { formatFAQCategory } from '../../utils/textFormatter';
import { fetchToken } from '../api/auth';

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

        <meta name="title" content={question} />
        <meta name="description" content={answer} />

        <meta property="og:url" content={`https://web.mvoterapp.com/faqs/${id}`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={question}/>
        <meta property="og:description" content={answer} />
        <meta property="og:image" content="/about/mvoter2020_new_logo.png" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={`https://web.mvoterapp.com/faqs/${id}`} />
        <meta property="twitter:title" content={question} />
        <meta property="twitter:description" content={answer} />
        <meta property="twitter:image" content="/about/mvoter2020_new_logo.png" />
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
  const token = await fetchToken(context);
  const api = new MaePaySohAPI(token);

  const response = await api.getFaqById(params.faq);
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