
import { useRouter } from 'next/router';
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

  const debouncedCall = useCallback(
    debounce((searchString) => apiCall(searchString), 1000)
  , []);

  async function apiCall(searchString) {
    const response = await fetch(`/api/${endpoint}?page=1&query=${searchString}`);
    const result = await response.json();

    setList(result.data);
  }

  function onChangeSearch(e) {
    debouncedCall(e.target.value);
  }

  return (
    <Layout>
      <AppHeader>
        <div onClick={() => router.back()}><i className="material-icons">arrow_back</i></div>
        <input
          type="text"
          className="search-input" placeholder={inputPlaceholder} onChange={onChangeSearch} />
      </AppHeader>
      <section className="container">
        {
          React.Children
            .map(children, child => React.cloneElement(child, { [type]: list }))
        }
      </section>
    </Layout>
  );
}

export default SearchPage;
