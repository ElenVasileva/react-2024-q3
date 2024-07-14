import { useEffect, useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import PageComponent from './components/PageComponent';
import ErrorBoundary from './components/ErrorBoundary';
import BadComponent from './components/BadComponent';
import { getItems } from './api';

interface Person {
  name: string;
  height: string;
  mass: string;
  url: string;
  gender: string;
  hair_color: string;
  skin_color: string;
}

function App() {
  const [data, setData] = useState<Person[]>([]);
  const initialSearchValue = localStorage.getItem('search') || '';
  const [searchString, setSearchString] = useState(initialSearchValue);

  useEffect(() => {
    console.log(`searchString changed: '${searchString}'`);
    getItems(1, searchString).then((data) => {
      setData(data);
    });

    localStorage.setItem('search', searchString);
  }, [searchString]);

  const onSearch = async (newSearchString: string) => {
    console.log(`onSearch: '${newSearchString}'`);
    setSearchString(newSearchString);
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
      </ErrorBoundary>
    </>
  );
}

export default App;
export type { Person };
