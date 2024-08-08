import { useContext, useState } from 'react';
import { createUrl } from '../../helpers/helper';
import { ThemeContext } from '../../themes/ThemeContext';
import PageParams from '../../types/PageParams';
import LinkComponent from '../Link/Link';

interface SearchComponentProps {
  pageParams: PageParams;
}

const SearchComponent = (props: SearchComponentProps) => {
  const theme = useContext(ThemeContext);
  const inputClass = 'input-' + theme;

  const [searchString, setSearchString] = useState(props.pageParams.search);

  const handleChange = (value: string) => {
    setSearchString(value);
  };

  const className = `button`;

  return (
    <div className="container">
      <div className="search card">
        <input
          className={inputClass}
          defaultValue={searchString}
          onChange={(e) => handleChange(e.target.value)}
          autoFocus
        />
      </div>
      <div className="card search-button-card">
        <LinkComponent
          href={createUrl({ ...props.pageParams, search: searchString, page: 1 })}
          className={className}
        >
          Search
        </LinkComponent>
      </div>
    </div>
  );
};

export default SearchComponent;
