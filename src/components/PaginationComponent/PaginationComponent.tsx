import { useContext } from 'react';
import { createUrl } from '../../helpers/helper';
import { ThemeContext } from '../../themes/ThemeContext';
import PageParams from '../../types/PageParams';
import LinkComponent from '../Link/Link';

interface PaginationComponentProps {
  entriesCount: number;
  pageParams: PageParams;
}

const PaginationComponent = (props: PaginationComponentProps) => {
  const pageCount = Math.ceil(props.entriesCount / 10);

  const theme = useContext(ThemeContext);

  const pageLinks = [];
  for (let i = 1; i <= pageCount; i++) {
    const className = `button page-button ${theme} ${props.pageParams.page === i ? 'selected' : ''}`;
    pageLinks.push(
      <LinkComponent href={createUrl({ ...props.pageParams, page: i })} key={i} className={className}>
        {i}
      </LinkComponent>,
    );
  }
  return <>{!!props.entriesCount && <div className="container">{pageLinks}</div>}</>;
};

export default PaginationComponent;
