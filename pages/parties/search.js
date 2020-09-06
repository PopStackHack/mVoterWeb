import SearchPage from '../../components/Search/SearchPage';
import PartyList from '../../components/Parties/PartyList/PartyList';

const FaqSearch = (props) => {
  // Why pass endpoint you may ask? Answer: I am lazy.
  return (
    <SearchPage
      type="parties"
      inputPlaceholder="ရှာလိုသော ပါတီအမည်ကို ရိုက်ထည့်ပါ"
      endpoint="searchParties"
    >
      <PartyList />
    </SearchPage>
  );
}

export default FaqSearch;