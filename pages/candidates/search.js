import SearchPage from '../../components/Search/SearchPage';
import CandidateList from '../../components/Candidates/CandidateList/CandidateList';

const CandidateSearch = (props) => {
  // Why pass endpoint you may ask? Answer: I am lazy.
  return (
    <SearchPage
      type="candidates"
      endpoint="searchCandidates"
    >
      <CandidateList />
    </SearchPage>
  );
}

export default CandidateSearch;
