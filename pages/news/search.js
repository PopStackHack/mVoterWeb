import SearchPage from '../../components/Search/SearchPage';
import NewsList from '../../components/News/NewsList/NewsList';

const NewsSearch = () => {
  return (
    <SearchPage
      type="news"
      inputPlaceholder="ရှာလိုသော သတင်းခေါင်းစဥ်အား ရိုက်ထည့်ပါ"
      endpoint="searchNews"
    >
      <NewsList />
    </SearchPage>
  );
}

export default NewsSearch;