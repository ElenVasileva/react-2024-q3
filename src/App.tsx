import { useEffect, useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import CardListComponent from './components/CardListComponent';
import ErrorBoundary from './components/ErrorBoundary';
import BadComponent from './components/BadComponent';
import { getItems as getItemsApi } from './api';
import PaginationComponent from './components/PaginationComponent';
import { useSearchParams } from 'react-router-dom';
import Person from './types/Person';
import { ThemeContext } from './themes/ThemeContext';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState<Person[]>([]);
  const initialSearchValue = localStorage.getItem('search') || '';
  const [searchString, setSearchString] = useState(initialSearchValue);
  const [entriesCount, setEntriesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(+(searchParams.get('page') || 1));

  const getItems = () => {
    getItemsApi(currentPage, searchString).then((data) => {
      setData(data.results);
      setEntriesCount(data.count);
    });
  };

  useEffect(() => {
    getItems();
    localStorage.setItem('search', searchString);
  }, [searchString]);

  useEffect(() => {
    setSearchParams('page=' + currentPage);
    getItems();
  }, [currentPage]);

  const onSearch = async (newSearchString: string) => {
    setCurrentPage(1);
    setSearchString(newSearchString);
  };
  const onPageChange = async (newPageNumber: number) => {
    setCurrentPage(newPageNumber);
  };
  const className = `main-container ${theme}`;

  return (
    <>
      <div className={className}>
        <ErrorBoundary hasError={false}>
          <ThemeContext.Provider value={theme}>
            <div className="header">
              <div className="app-name">Simple React Application</div>
              <BadComponent></BadComponent>
            </div>
            <label>
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={(e) => {
                  setTheme(e.target.checked ? 'dark' : 'light');
                }}
              />
              Use dark mode
            </label>
            <SearchComponent initialSearchValue={initialSearchValue} onSearch={onSearch} />
            <div id="page" className="page">
              <CardListComponent data={data} />
            </div>
            <PaginationComponent entriesCount={entriesCount} selectedPage={currentPage} onPageChange={onPageChange}></PaginationComponent>
          </ThemeContext.Provider>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default App;
