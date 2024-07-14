import { useEffect, useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import PageComponent from './components/PageComponent';
import ErrorBoundary from './components/ErrorBoundary';
import BadComponent from './components/BadComponent';
import { getItems as getItemsApi } from './api';
import PaginationComponent from './components/PaginationComponent';

interface Person {
  name: string;
  height: string;
  mass: string;
  url: string;
  gender: string;
  hair_color: string;
  skin_color: string;
}

const App = () => {
  const [data, setData] = useState<Person[]>([]);
  const initialSearchValue = localStorage.getItem('search') || '';
  const [searchString, setSearchString] = useState(initialSearchValue);
  const [entriesCount, setEntriesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const getItems = () => {
    getItemsApi(currentPage, searchString).then((data) => {
      setData(data.results);
      setEntriesCount(data.count);
    });
  };

  useEffect(() => {
    console.log(`searchString changed: '${searchString}'`);
    getItems();
    localStorage.setItem('search', searchString);
  }, [searchString]);

  useEffect(() => {
    console.log(`currentPage changed: '${currentPage}'`);
    getItems();
  }, [currentPage]);

  const onSearch = async (newSearchString: string) => {
    console.log(`onSearch: '${newSearchString}'`);
    setCurrentPage(0);
    setSearchString(newSearchString);
  };
  const onPageChange = async (newPageNumber: number) => {
    console.log(`onSearch: '${newPageNumber}'`);
    setCurrentPage(newPageNumber);
  };

  return (
    <>
      <ErrorBoundary hasError={false}>
        <div className="header">
          <div className="app-name">Simple React Application</div>
          <BadComponent></BadComponent>
        </div>
        <SearchComponent initialSearchValue={initialSearchValue} onSearch={onSearch} />
        <div id="page" className="page">
          <PageComponent data={data} />
        </div>
        <PaginationComponent entriesCount={entriesCount} selectedPage={currentPage} onPageChange={onPageChange}></PaginationComponent>
      </ErrorBoundary>
    </>
  );
};

export default App;
export type { Person };
