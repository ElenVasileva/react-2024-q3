import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

interface PaginationComponentProps {
  entriesCount: number;
  selectedPage: number;
  onPageChange: (newPageNumber: number) => void;
}

const PaginationComponent = (props: PaginationComponentProps) => {
  const theme = useContext(ThemeContext);

  const pageCount = Math.floor(props.entriesCount / 10) + 1;

  const onClick = (newPageNumber: number) => {
    props.onPageChange(newPageNumber);
  };

  const pageLinks = [];
  for (let i = 1; i <= pageCount; i++) {
    const className =  `page-button ${props.selectedPage === i ?'selected':''} button-${theme}`;
    pageLinks.push(
      <button key={i} className={className} onClick={() => onClick(i)}>
        {i}
      </button>,
    );
  }
  return <>{!!props.entriesCount && <div className="container">{pageLinks}</div>}</>;
};

export default PaginationComponent;
