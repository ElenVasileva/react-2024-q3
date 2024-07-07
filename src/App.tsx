import { Component } from 'react';
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

class App extends Component {
  constructor(props: {}) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  state = {
    initialSearchValue: localStorage.getItem('search') || '',
    searchValue: '',
    isLoading: true,
    data: [],
  };

  async fetchData(searchString: string) {
    searchString = searchString.trim();
    localStorage.setItem('search', searchString);
    this.setState({
      searchValue: searchString,
    });

    const response = await window.fetch(
      'https://swapi.dev/api/people/?search=' + searchString
    );

    const data = await response.json();
    if (response.ok) {
      const list = data?.results;

      this.setState({
        data: list,
        isLoading: false,
      });
    }
  }

  render() {
    return (
      <>
        <div className='header'>Simple React Application</div>
        <ErrorBoundary hasError={false}>
          <SearchComponent
            initialSearchValue={this.state.initialSearchValue}
            onSearch={this.fetchData}
          />
          <DataComponent
            isLoading={this.state.isLoading}
            data={this.state.data}
          />
          <BadComponent></BadComponent>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
export type { Person };
