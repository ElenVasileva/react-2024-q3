import { useEffect, useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ErrorBoundary from './components/ErrorBoundary';
import BadComponent from './components/BadComponent';
import PaginationComponent from './components/PaginationComponent';
import { useSearchParams } from 'react-router-dom';
import { ThemeContext } from './themes/ThemeContext';
import FlyoutComponent from './components/FlyoutComponent/FlyoutComponent';
import ResultComponent from './components/ResultComponent';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearchValue = localStorage.getItem('search') || '';
  const [searchString, setSearchString] = useState(initialSearchValue);
  const [entriesCount, setEntriesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(+(searchParams.get('page') || 1));

  useEffect(() => {
    localStorage.setItem('search', searchString);
  }, [searchString]);

  useEffect(() => {
    setSearchParams('page=' + currentPage);
  }, [currentPage]);

  const onSearch = async (newSearchString: string) => {
    setCurrentPage(1);
    setSearchString(newSearchString);
  };
  const onPageChange = async (newPageNumber: number) => {
    setCurrentPage(newPageNumber);
  };
  const className = `main-container ${theme}`;
  const onCountChanged = (newCount: number) => {
    setEntriesCount(newCount);
  };
  return (
    <>
      <div className={className}>
        <div>
          <ErrorBoundary hasError={false}>
            <ThemeContext.Provider value={theme}>
              <div className="header">
                <div className="app-name">Simple React Application</div>
                <BadComponent />
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
              <PaginationComponent entriesCount={entriesCount} selectedPage={currentPage} onPageChange={onPageChange} />
              <ResultComponent page={currentPage} search={searchString} onCountChanged={onCountChanged} />
              <FlyoutComponent />
            </ThemeContext.Provider>
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};

export default App;
