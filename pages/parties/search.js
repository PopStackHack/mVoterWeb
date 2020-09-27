import SearchPage from '../../components/Search/SearchPage';
import PartyList from '../../components/Parties/PartyList/PartyList';

const FaqSearch = (props) => {
  // Why pass endpoint you may ask? Answer: I am lazy.
  return (
    <SearchPage
      type="parties"
      endpoint="searchParties"
      inputPlaceholder="ပါတီအမည်"
      emptyPlaceholder="မိမိ ရှာလိုသော ပါတီနာမည်ကို အပေါ်တွင်ရိုက်ထည့်ပါ။"
      notFoundPlaceholder="သင်ရှာသော ပါတီအား ပါတီစာရင်းတွင် ရှာမတွေ့ပါ"
    >
      <PartyList />
    </SearchPage>
  );
}

export default FaqSearch;