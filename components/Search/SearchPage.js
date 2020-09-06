
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../../components/Layout/Layout';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import { debounce } from '../../utils/helpers';
import React, { useCallback, useState, Children } from 'react';

const SearchPage = (props) => {
  const {
    type = 'candidates',
    endpoint,
    children,
    inputPlaceholder = 'ရှာဖွေလိုသော အမည်ကို ရိုက်ထည့်ပါ'
  } = props;

  const router = useRouter();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [searchString, setSearchString] = useState('');

  const debouncedCall = useCallback(
    debounce((value) => apiCall(value), 600)
  , []);

  async function apiCall(value) {
    const pageToCall = page + 1;

    const response = await fetch(`/api/${endpoint}?page=${pageToCall}&query=${value || searchString}`);
    const result = await response.json();

    setPage(pageToCall);
    return setList(list.concat(result.data));
  }

  function loadMoreData() {
    apiCall();
  }

  function onChangeSearch(e) {
    const { target: { value } } = e;
    setSearchString(value);
    debouncedCall(value);
  }

  return (
    <Layout>
      <AppHeader>
        <div onClick={() => router.back()}><i className="material-icons">arrow_back</i></div>
        <input
          type="text"
          className="search-input" placeholder={inputPlaceholder} onChange={onChangeSearch} value={searchString} />
      </AppHeader>
      <section className="container">
        <div className="row">
          <div className="col-xs-12">
            <InfiniteScroll
              next={loadMoreData}
              dataLength={list.length}
              hasMore={true}
            >
              {
                React.Children
                  .map(children, child => React.cloneElement(child, { [type]: list }))
              }
            </InfiniteScroll>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default SearchPage;
