import { useEffect, useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import CardListComponent from './components/CardListComponent';
import ErrorBoundary from './components/ErrorBoundary';
import BadComponent from './components/BadComponent';
import { getItems as getItemsApi } from './api';
import PaginationComponent from './components/PaginationComponent';
import { useSearchParams } from 'react-router-dom';

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
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState<Person[]>([]);
  const initialSearchValue = localStorage.getItem('search') || '';
  const [searchString, setSearchString] = useState(initialSearchValue);
  const [entriesCount, setEntriesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(+(searchParams.get('page') || 0));

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
    setSearchParams('page=' + currentPage);
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
          <CardListComponent data={data} />
        </div>
        <PaginationComponent entriesCount={entriesCount} selectedPage={currentPage} onPageChange={onPageChange}></PaginationComponent>
      </ErrorBoundary>
    </>
  );
};

export default App;
export type { Person };
