import ReactGA from 'react-ga';
import htmlToText from 'html-to-text';
import nookies from 'nookies';
import Head from 'next/head';
import { useEffect } from 'react';
import MaePaySohAPI from '../../gateway/api';
import Layout from '../../components/Layout/Layout';
import { formatFAQCategory } from '../../utils/textFormatter';
import { useAuthContext } from '../../context/AuthProvider';

import './faq.module.scss';

const FAQ = (props) => {
  const {
    faq: {
      id,
      category,
      question,
      answer,
      source,
      strippedAnswer,
      law_source: lawSource,
      article_source: articleSource,
    },
    token,
  } = props;

  const { updateToken } = useAuthContext();

  useEffect(() => ReactGA.pageview('/faqs/[faq]'), []);
  useEffect(() => {
    if (token) {
      updateToken(token);
    }
  }, [token]);

  return (
    <Layout>
      <Head>
        <title>{formatFAQCategory(category)} သိမှတ်ဖွယ်ရာ | mVoter 2020</title>

        <meta name="title" content={question} />
        <meta name="description" content={strippedAnswer} />

        <meta property="og:url" content={`https://web.mvoterapp.com/faqs/${id}`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={question}/>
        <meta property="og:description" content={answer} />
        <meta property="og:image" content="/about/mvoter2020_new_logo.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />

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
              <span className="FAQ__answer" dangerouslySetInnerHTML={{ __html: answer }}></span>
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

  const cookies = nookies.get(context);
  const api = new MaePaySohAPI(cookies.token);
  const response = await api.getFaqById(params.faq);

  const { data, token } = response.data;

  // Strip HTML characters into one string
  const htmlStrippedAnswer = htmlToText.fromString(data.attributes.answer);
  data.attributes.strippedAnswer = htmlStrippedAnswer;

  return {
    props: {
      faq: {
        ...data,
        ...data.attributes,
      },
      ...(token && { token }),
    },
  };
}

export default FAQ;