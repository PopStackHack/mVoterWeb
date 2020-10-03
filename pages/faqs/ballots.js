import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import Head from 'next/head';
import Slider from 'react-slick';
import Select from 'react-select';
import myanmarNumbers from 'myanmar-numbers';
import { customSelectStyle, BALLOT_CATEGORIES } from '../../utils/constants';
import Button from '../../components/Common/Button/Button';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import Layout from '../../components/Layout/Layout';

import './slick.scss';
import './slick-theme.scss';
import './ballots.module.scss';
import useAPI from '../../hooks/useAPI';

function PrevArrow(props) {
  const { onClick, currentSlide } = props;
  return (
    <button
      type="button"
      className="ballot-arrow"
      disabled={currentSlide === 0}
      style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1
      }}
      onClick={onClick}
    >
      <i className="material-icons">chevron_left</i>
    </button>
  );
}

function NextArrow(props) {
  const { onClick, currentSlide, slideCount } = props;
  return (
    <button
      type="button"
      className="ballot-arrow"
      disabled={currentSlide === slideCount - 1}
      style={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1
      }}
      onClick={onClick}
    >
      <i className="material-icons">chevron_right</i>
    </button>
  );
}

const Ballots = () => {
  const router = useRouter();
  const [ballots, setBallots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef();
  const [, fetchData] = useAPI();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    count: ballots.length,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: current => {
      setCurrentSlide(current + 1);
    }
  };

  async function fetchBallots(category = 'normal') {
    setLoading(true);

    const { data } = await fetchData('/api/ballots', {
      category
    });

    setBallots(data);
    setLoading(false);
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    fetchBallots();
  }, []);

  function onChangeCategory(value) {
    sliderRef.current.slickGoTo(0, true); // don't animate
    fetchBallots(value);
    setCurrentSlide(1);
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Head>
        <title>မဲနမူနာများ | mVoter 2020</title>
      </Head>
      <AppHeader>
        <div className="d-flex">
          <Button className="no-padding" onClick={() => router.back()}>
            <i className="cursor-pointer material-icons">arrow_back</i>
          </Button>
          <span className="d-inline-block ml-3">သိမှတ်ဖွယ်ရာများ</span>
        </div>
      </AppHeader>
      <section id="Ballots" className="Ballots">
        <Select
          className="Ballots__SelectCategory"
          defaultValue={BALLOT_CATEGORIES[0]}
          isSearchable={false}
          styles={customSelectStyle}
          options={BALLOT_CATEGORIES}
          onChange={({ value }) => onChangeCategory(value)}
        />
        {/* <button onClick={() => sliderRef.current.slickGoTo(0)}>ခိုင်လုံမဲ</button>
        <button onClick={() => sliderRef.current.slickGoTo(invalidBallotIndex)}>ပယ်မဲ</button> */}
        {loading && <AiOutlineLoading className="loader ballot-loader" />}
        {!loading && (
          <>
            <Slider {...settings} ref={sliderRef}>
              {ballots.map(({ attributes: ballot }) => (
                <div key={ballot.id} className="Ballots__ballot-item">
                  <img src={ballot.image_path} alt="Ballot Sample" />
                  <div
                    className={`my-2 ${
                      ballot.is_valid ? 'valid-color' : 'invalid-color'
                    }`}
                  >
                    {ballot.is_valid ? 'ခိုင်လုံမဲ' : 'ပယ်မဲ'}
                  </div>
                  <div className="mt-1">{ballot.reason}</div>
                </div>
              ))}
            </Slider>
            <div className="text-center text-bold">
              {myanmarNumbers(currentSlide, 'my')} /
              {myanmarNumbers(ballots.length, 'my')}
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default Ballots;
