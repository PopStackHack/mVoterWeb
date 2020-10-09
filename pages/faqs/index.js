import ReactGA from 'react-ga';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';
import Head from 'next/head';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { customSelectStyle, FAQ_CATEGORY } from '../../utils/constants';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import FaqList from '../../components/Faq/FaqList/FaqList';
import Button from '../../components/Common/Button/Button';
import GavelIcon from '../../components/Common/Icons/gavel';

import './faqs.module.scss';
import useAPI from '../../hooks/useAPI';

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [faqCategory, setFaqCategory] = useState('voter_list');
  const router = useRouter();
  const [, fetchData] = useAPI();

  async function fetchFaqs(category = 'voter_list', pageToLoad = 1) {
    try {
      const data = await fetchData('/api/faqs', {
        page: pageToLoad,
        category
      });

      return data;
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    fetchFaqs()
      .then(result => {
        setFaqs(result.data);
        setTotalCount(result.pagination.total);
      })
      .catch(error => error);
  }, []);

  function onChangeCategory(category) {
    // Clear FAQs first
    fetchFaqs(category)
      .then(result => {
        // Reset to defaults
        setPage(1);
        setFaqs([]);
        setFaqCategory(category);
        return result;
      })
      .then(result => setFaqs(result.data))
      .catch(error => error);
  }

  function loadMoreFaqs() {
    const nextPage = page + 1;
    fetchFaqs(faqCategory, nextPage)
      .then(result => setFaqs(faqs.concat(result.data)))
      .then(() => setPage(nextPage))
      .catch(error => error);
  }

  return (
    <Layout>
      <Head>
        <title>သိမှတ်ဖွယ်ရာများ | mVoter 2020</title>
      </Head>
      <AppHeader>
        <div className="text-bold">သိမှတ်ဖွယ်ရာများ</div>
        <div>
          <Link href="/faqs/search">
            <a>
              <Button className="color-primary" style={{ marginRight: 8 }}>
                <i className="material-icons vert-align-middle">search</i>
              </Button>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Button className="color-primary no-padding">
                <i className="material-icons vert-align-middle">info</i>
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
                label: FAQ_CATEGORY.voter_list
              }}
              options={Object.entries(FAQ_CATEGORY).map(([key, text]) => ({
                value: key,
                label: text
              }))}
              onChange={({ value }) => onChangeCategory(value)}
            />
          </div>
        </div>
      </div>
      <section id="FAQS" className="FAQS">
        <div>
          {faqCategory === 'voter_list' && (
            <div className="row align-items-center mb-3">
              <div className="col-12 col-lg-6">
                <div
                  className="ballot-stack row no-gutters align-items-center mb-xs-2 box-hover"
                  onClick={() => router.push('/faqs/ballots')}
                >
                  <div className="col-4">
                    <img
                      className="ballot-stack-picture"
                      src="/ballot_stack.png"
                      alt="Ballot Stack"
                    />
                  </div>
                  <div className="col-8">ပယ်မဲ၊ ခိုင်လုံမဲ နမူနာများ</div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="prohibitions row">
                  <div className="col-3 prohibition">
                    <img
                      src="/prohibition_signs/no_selfie.png"
                      alt="No Selfie"
                    />
                    <div>
                      Selfie <br />
                      မရိုက်ရ
                    </div>
                  </div>
                  <div className="col-3 prohibition">
                    <img src="/prohibition_signs/no_photo.png" alt="No Photo" />
                    <div>
                      ဓာတ်ပုံ <br />
                      မရိုက်ရ
                    </div>
                  </div>
                  <div className="col-3 prohibition">
                    <img src="/prohibition_signs/no_video.png" alt="No Video" />
                    <div>
                      ဗီဒီယို <br />
                      မရိုက်ရ
                    </div>
                  </div>
                  <div className="col-3 prohibition">
                    <img
                      src="/prohibition_signs/no_recording.png"
                      alt="No Recording"
                    />
                    <div>
                      အသံ <br />
                      မသွင်းရ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {faqCategory === 'voter_list' && (
            <div className="row justify-content-center my-3">
              <div className="col-12 col-lg-4">
                <Link href="/how_to_vote/voter_list">
                  <div className="check-voter-list box-hover cursor-pointer">
                    <i className="color-primary material-icons vert-align-middle">
                      how_to_reg
                    </i>
                    <span>မဲစာရင်းစစ်ရန်</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
          {faqCategory === 'candidate' && (
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <a
                  style={{ textDecoration: 'none' }}
                  href="//mvoterapp.com/election-law"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="unfair-law box-hover">
                    <div>
                      <GavelIcon />
                    </div>
                    <div className="unfair-law-text">
                      ရွေးကောက်ပွဲဆိုင်ရာ ပြစ်မှု၊ ပြစ်ဒဏ်များနှင့်
                      တရားမဲ့ပြုကျင့်မှုများ
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
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
};

export default FAQs;
