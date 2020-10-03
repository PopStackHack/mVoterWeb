import { formatPublishDateToMMLocale } from '../../../utils/textFormatter';
import './NewsItem.scss';

const Article = props => {
  const {
    news: {
      attributes: { title, summary, published_date: publishedDate, url }
    }
  } = props;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="article-link"
      href={url}
    >
      <div className="Article">
        <div className="Article__newsGroup">
          <h1 className="Article__heading">{title}</h1>
          <p className="Article__summary">{summary} ...</p>
          <p className="Article__date">
            {formatPublishDateToMMLocale(publishedDate)}
          </p>
        </div>
        <div className="Article__UECLogo">
          <img src="/UEC.png" alt="UEC Logo" />
        </div>
      </div>
    </a>
  );
};

export default Article;
