import { useEffect, useState } from 'react';
import Select from 'react-select';
import Head from 'next/head';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import FaqList from '../../components/Faq/FaqList/FaqList';
import Button from '../../components/Common/Button/Button';

import { FAQ_CATEGORY } from '../../utils/constants';

import './faqs.module.scss';

const FAQ = (props) => {
  const [faqs, setFaqs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [faqCategory, setFaqCategory] = useState('voter_list');

  const customSelectStyle = {
    option: (styles, state) => ({
      ...styles,
      cursor: 'pointer',
    }),
    control: (styles) => ({
      ...styles,
      cursor: 'pointer',
    }),
  }


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
        <div>
          <Link href="/faqs/search">
            <a>
              <Button className="color-primary">
                <i className="material-icons">search</i>
              </Button>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Button className="color-primary">
                <i className="material-icons">info</i>
              </Button>
            </a>
          </Link>
        </div>
      </AppHeader>
      <div>
        <div className="row no-gutters mb-2">
          <div className="col-12">
            <Select
              className="category-select"
              styles={customSelectStyle}
              isSearchable={false}
              defaultValue={{
                value: 'voter_list',
                label: FAQ_CATEGORY.voter_list,
              }}
              options={
                Object.entries(FAQ_CATEGORY).map(([key, text]) => ({ value: key, label: text }))
              }
              onChange={({ value }) => onChangeCategory(value)}
            />
          </div>
      </div>
      </div>
      <section id="FAQ" className="FAQ">
        <div className="">
          <div className="row align-items-center mb-lg-3">
            <div className="col-xs-12 col-lg-6">
              <div className="ballot-stack row no-gutters align-items-center mb-xs-2 box-hover">
                <div className="col-4">
                  <img className="ballot-stack-picture" src="/ballot_stack.png" alt="Ballot Stack"/>
                </div>
                <div className="col-8">ပယ်မဲ၊ ခိုင်လုံမဲ နမူနာများ</div>
              </div>
            </div>
            <div className="col-xs-12 col-lg-6">
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
            </div>
          </div>
        </div>
          <InfiniteScroll
            next={loadMoreFaqs}
            dataLength={faqs.length}
            hasMore={faqs.length !== totalCount}
          >
            <FaqList faqs={faqs} />
          </InfiniteScroll>
      </section>
    </Layout>
  );
}

export default FAQ;
