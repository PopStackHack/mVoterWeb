import SearchPage from '../../components/Search/SearchPage';
import CandidateList from '../../components/Candidates/CandidateList/CandidateList';

const CandidateSearch = () => {
  // Why pass endpoint you may ask? Answer: I am lazy.
  return (
    <SearchPage
      type="candidates"
      endpoint="searchCandidates"
      inputPlaceholder="ကိုယ်စားလှယ်လောင်း အမည်"
      emptyPlaceholder="မိမိရှာလိုသော ကိုယ်စားလှယ်လောင်းနာမည်ကို အပေါ်တွင် ရိုက်ထည့်ပါ။"
      notFoundPlaceholder="သင်ရှာသော ကိုယ်စားလှယ်လောင်းအား ကိုယ်စားလှယ်လောင်းစာရင်းတွင် ရှာမတွေ့ပါ"
    >
      <CandidateList />
    </SearchPage>
  );
};

export default CandidateSearch;
