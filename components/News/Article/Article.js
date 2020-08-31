import { formatPublishDateToMMLocale } from '../../../utils/textFormatter'
import './Article.module.scss';
import moment from 'moment';

const Article = (props) => {
  const {
    news: {
      id,
      attributes: {
        title,
        summary,
        published_date: publishedDate,
        url,
      },
    },
  } = props;

  return (
    <a href={url} target="_blank" rel="noopener" className="article-link">
      <div className="Article">
        <div className="Article__newsGroup">
          <h1 className="Article__heading">{title}</h1>
          <p className="Article__summary">
            {summary}
          </p>
          <p className="Article__date">{formatPublishDateToMMLocale(publishedDate)}</p>
        </div>
        <div className="Article__UECLogo">
          <img src="/UEC.png" alt="UEC Logo" />
        </div>
      </div>
    </a>
  );
}

export default Article;
