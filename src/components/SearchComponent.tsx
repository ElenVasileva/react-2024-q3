import { useContext, useState } from 'react';
import { ThemeContext } from '../themes/ThemeContext';
import ButtonComponent from './ButtonComponent/ButtonComponent';

interface SearchComponentProps {
  initialSearchValue: string;
  onSearch: (searchString: string) => void;
}

const SearchComponent = (props: SearchComponentProps) => {
  const theme = useContext(ThemeContext);
  const inputClass = 'input-' + theme;

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
        <input className={inputClass} defaultValue={props.initialSearchValue} onChange={(e) => handleChange(e.target.value)} autoFocus />
      </div>
      <div className="card">
        <ButtonComponent onClick={onClick}>Search</ButtonComponent>
      </div>
    </div>
  );
};

export default SearchComponent;
