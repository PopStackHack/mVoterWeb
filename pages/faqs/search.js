import SearchPage from '../../components/Search/SearchPage';
import FaqList from '../../components/Faq/FaqList/FaqList';

const FaqSearch = (props) => {
  // Why pass endpoint you may ask? Answer: I am lazy.
  return (
    <SearchPage
      type="faqs"
      endpoint="searchFaqs"
      inputPlaceholder="အမေးအဖြေ ရိုက်ထည့်ရန်"
      emptyPlaceholder="မိမိ ရှာလို့သော အမေးအဖြေကို အပေါ်တွင်ရိုက်ထည့်ပါ"
      notFoundPlaceholder="သင်ရှာသော အမေးအဖြေအား ရှာမတွေ့ပါ"
    >
      <FaqList />
    </SearchPage>
  );
}

export default FaqSearch;