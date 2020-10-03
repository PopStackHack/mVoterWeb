import SearchPage from '../../components/Search/SearchPage';
import NewsList from '../../components/News/NewsList/NewsList';

const NewsSearch = () => {
  return (
    <SearchPage
      type="news"
      endpoint="searchNews"
      inputPlaceholder="ရှာလိုသော သတင်းခေါင်းစဥ်အား ရိုက်ထည့်ပါ"
      emptyPlaceholder="မိမိ ရှာလို့သော သတင်းခေါင်းစဥ်ကို အပေါ်တွင်ရိုက်ထည့်ပါ"
      notFoundPlaceholder="သင်ရှာသော သတင်းခေါင်းစဥ်အား ရှာမတွေ့ပါ"
    >
      <NewsList />
    </SearchPage>
  );
};

export default NewsSearch;
