import { useEffect, useState } from 'react';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import FaqItem from '../../components/Faq/FaqItem';
import { FAQ_CATEGORY } from '../../utils/constants';

import './faqs.module.scss';

const FAQ = (props) => {
  const [faqs, setFaqs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [faqCategory, setFaqCategory] = useState('voter_list');

  useEffect(() => {
    fetchFaqs()
      .then((result) => {
        setFaqs(result.data);
        setTotalCount(result.pagination.total);
      })
      .catch(console.error);
  }, []);

  async function fetchFaqs(category = 'voter_list', pageToLoad = 1) {
    try {
      const response = await fetch(`/api/faqs?page=${pageToLoad}&category=${category}`);
      const { data, pagination } = await response.json();

      return { data, pagination };
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  }

  function onChangeCategory(category) {
    // Clear FAQs first
    fetchFaqs(category)
      .then((result) => {
        // Reset to defaults
        setPage(1);
        setFaqs([]);
        setFaqCategory(category);
        return result;
      })
      .then((result) => setFaqs(result.data))
      .catch(console.error);
  }

  function loadMoreFaqs() {
    const nextPage = page + 1;
    fetchFaqs(faqCategory, nextPage)
      .then((result) => setFaqs(faqs.concat(result.data)))
      .then(() => setPage(nextPage))
      .catch(console.error);
  }

  return (
    <Layout>
      <Head>
        <title>သိမှတ်ဖွယ်ရာများ</title>
      </Head>
      <AppHeader>
        <div className="text-bold">သိမှတ်ဖွယ်ရာများ</div>
      </AppHeader>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <select className="category-select" onChange={(e) => onChangeCategory(e.target.value)}>
              {
                Object.entries(FAQ_CATEGORY).map(([key, value]) => <option key={key} value={key}>{value}</option>)
              }
            </select>
          </div>
      </div>
      </div>
      <section id="FAQ" className="container FAQ">
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
          <InfiniteScroll
            scrollableTarget="FAQ"
            next={loadMoreFaqs}
            dataLength={faqs.length}
            hasMore={faqs.length !== totalCount}
          >
            <ul className="FAQ__List">
              {
                faqs.map((faq) => {
                  return (
                    <FaqItem
                      key={faq.id}
                      faq={{ ...faq.attributes }}
                    />
                  )
                })
              }
            </ul>
          </InfiniteScroll>
      </section>
    </Layout>
  );
}

export default FAQ;
