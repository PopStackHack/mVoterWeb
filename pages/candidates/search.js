import SearchPage from '../../components/Search/SearchPage';
import CandidateList from '../../components/Candidates/CandidateList/CandidateList';

const CandidateSearch = (props) => {
  // Why pass endpoint you may ask? Answer: I am lazy.
  return (
    <SearchPage
      type="candidates"
      endpoint="searchCandidates"
      inputPlaceholder="ကိုယ်စားလှယ်လောင်း အမည်"
      emptyPlaceholder="မိမိရှာလိုသော ကိုယ်စားလှယ်လောင်းနာမည်ကို အပေါ်တွင် ရိုက်ထည့်ပါ။"
    >
      <CandidateList />
    </SearchPage>
  );
}

export default CandidateSearch;
