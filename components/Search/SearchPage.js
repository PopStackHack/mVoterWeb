
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Common/Button/Button';
import AppHeader from '../../components/Layout/AppHeader/AppHeader';
import { debounce } from '../../utils/helpers';
import React, { useCallback, useState, Children } from 'react';

import './SearchPage.scss';
import useAPI from '../../hooks/useAPI';

const SearchPage = (props) => {
  const {
    type = 'candidates',
    endpoint,
    children,
    inputPlaceholder = 'ရှာဖွေလိုသော အမည်ကို ရိုက်ထည့်ပါ'
  } = props;

  const router = useRouter();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [searchString, setSearchString] = useState('');
  const [, fetchData] = useAPI();

  const debouncedCall = useCallback(
    debounce((value) => apiCall(value), 600)
  , []);

  async function apiCall(value) {
    let itemPerPage = 25;

    if (page > 1) {
      itemPerPage = 10;
    }

    const { data } = await fetchData(`/api/${endpoint}`, {
      page,
      query: value || searchString,
      item_per_page: itemPerPage,
    });

    setPage(page + 1);
    return setList(list.concat(data));
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
        <Button>
          <i className="material-icons" onClick={() => router.back()}>arrow_back</i>
        </Button>
        <div className="search-input-group">
          <i className="material-icons">search</i>
          <input
            type="text"
            className="search-input" placeholder={inputPlaceholder} onChange={onChangeSearch} value={searchString} />
        </div>
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
