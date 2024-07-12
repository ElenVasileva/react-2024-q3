import { useEffect, useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import DataComponent from './components/DataComponent';
import ErrorBoundary from './components/ErrorBoundary';
import BadComponent from './components/BadComponent';

interface Person {
  name: string;
  height: string;
  mass: string;
}

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const initialSearchValue = localStorage.getItem('search') || '';
  const [searchString, setSearchString] = useState(initialSearchValue);

  useEffect(() => {
    console.log(`searchString changed: '${searchString}'`);    
    setIsLoading(true);
    fetch('https://swapi.dev/api/people/?search=' + searchString)
      .then((response) => response.json())
      .then((json) => {
        setData(json?.results);
        setIsLoading(false);
      });
    localStorage.setItem('search', searchString);
  }, [searchString]);

  const onSearch = async (newSearchString: string) => {
    console.log(`onSearch: '${newSearchString}'`);
    setSearchString(newSearchString);
  };

  return (
    <>
      <div className="header">Simple React Application</div>
      <ErrorBoundary hasError={false}>
        <SearchComponent initialSearchValue={initialSearchValue} onSearch={onSearch} />
        <DataComponent isLoading={isLoading} data={data} />
        <BadComponent></BadComponent>
      </ErrorBoundary>
    </>
  );
}

export default App;
export type { Person };
