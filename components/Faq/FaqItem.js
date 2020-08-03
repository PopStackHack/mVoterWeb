import React, { useEffect, useState, useRef } from 'react';

import './FaqItem.module.scss';

const textLength = 120;

const FaqItem = (props) => {
  const {
    question,
    answer,
  } = props;

  const answerRef = useRef(null);
  const [shouldAnswerTruncate, setAnswerTruncate] = useState(true);

  function onClickSeeMore() {
    setAnswerTruncate(!shouldAnswerTruncate);
  }

  return (
    <div className="FaqItem">
      <span className="FaqItem__question">
        {question}
      </span>
      <span className="FaqItem__answer" ref={answerRef}>

        <span className="answer" onClick={() => setAnswerTruncate(true)}>
          {
            answer.length > textLength && shouldAnswerTruncate ?
              answer.slice(0, textLength).concat(' ...')
              :
              answer
          }
        </span>&nbsp;
        {
          shouldAnswerTruncate &&
            <span className="seeMore" onClick={onClickSeeMore}>See more</span>
        }
      </span>
    </div>
  );
};

export default FaqItem;