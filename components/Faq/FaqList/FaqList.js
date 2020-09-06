// Wrapper component for FAQ List
import FaqItem from '../FaqItem/FaqItem';

import './FaqList.scss';

const FaqList = ({ faqs = [] }) => {
  return (
    <ul className="FaqList">
      {
        faqs.map((faq) => (
          <FaqItem key={faq.id} faq={faq} />
        ))
      }
    </ul>
  );
};

export default FaqList;
