import NewsItem from '../NewsItem/NewsItem';

import './NewsList.scss';

const NewsList = ({ news = [] }) => {
  return (
    <ul className="NewsList">
      {news.map(newsItem => (
        <NewsItem key={newsItem.id} news={newsItem} />
      ))}
    </ul>
  );
};

export default NewsList;
