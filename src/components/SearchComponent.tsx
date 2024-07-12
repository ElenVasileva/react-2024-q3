import { useState } from 'react';

interface SearchComponentProps {
  initialSearchValue: string;
  onSearch: (searchString: string) => void;
}

function SearchComponent(props: SearchComponentProps) {
  const [searchString, setSearchString] = useState(props.initialSearchValue);

  const onClick = () => {
    console.log(`handleClick: '${searchString}'`);
    props.onSearch(searchString);
  };

  const handleChange = (value: string) => {
    console.log(`handleChange: '${value}'`);
    setSearchString(value);
  };

  return (
    <div className="container">
      <div className="search card">
        <input defaultValue={props.initialSearchValue} onChange={(e) => handleChange(e.target.value)} />
      </div>
      <div className="card">
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
}

export default SearchComponent;
