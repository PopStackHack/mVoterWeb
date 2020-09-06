import SearchPage from '../../components/Search/SearchPage';
import FaqList from '../../components/Faq/FaqList/FaqList';

const FaqSearch = (props) => {
  // Why pass endpoint you may ask? Answer: I am lazy.
  return (
    <SearchPage
      type="faqs"
      inputPlaceholder="ရှာလိုသော အမေးအဖြေကို ရိုက်ထည့်ပါ"
      endpoint="searchFaqs"
    >
      <FaqList />
    </SearchPage>
  );
}

export default FaqSearch;