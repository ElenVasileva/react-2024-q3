import { Component } from 'react';

class SearchComponent extends Component<{
  initialSearchValue: string;
  onSearch: (searchString: string) => void;
}> {
  state = {
    searchString: this.props.initialSearchValue,
  };

  componentDidMount() {
    this.props.onSearch(this.props.initialSearchValue);
  }

  handleClick = () => {
    this.props.onSearch(this.state.searchString);
  };

  handleChange = (value: string) => {
    this.setState({
      searchString: value,
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='search card'>
          <input onChange={(e) => this.handleChange(e.target.value)} value={this.state.searchString} />
        </div>
        <div className='card'>
          <button onClick={this.handleClick}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
