import { useState } from 'react';

interface SearchComponentProps {
  initialSearchValue: string;
  onSearch: (searchString: string) => void;
}

const SearchComponent = (props: SearchComponentProps) => {
  const [searchString, setSearchString] = useState(props.initialSearchValue);

  const onClick = () => {
    props.onSearch(searchString);
  };

  const handleChange = (value: string) => {
    setSearchString(value);
  };

  return (
    <div className="container">
      <div className="search card">
        <input defaultValue={props.initialSearchValue} onChange={(e) => handleChange(e.target.value)} autoFocus />
      </div>
      <div className="card">
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchComponent;
