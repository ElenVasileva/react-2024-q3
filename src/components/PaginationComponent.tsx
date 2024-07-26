import ButtonComponent from './ButtonComponent/ButtonComponent';

interface PaginationComponentProps {
  entriesCount: number;
  selectedPage: number;
  onPageChange: (newPageNumber: number) => void;
}

const PaginationComponent = (props: PaginationComponentProps) => {
  const pageCount = Math.floor(props.entriesCount / 10) + 1;

  const onClick = (newPageNumber: number) => {
    props.onPageChange(newPageNumber);
  };

  const pageLinks = [];
  for (let i = 1; i <= pageCount; i++) {
    const className = `page-button ${props.selectedPage === i ? 'selected' : ''}`;
    pageLinks.push(
      <ButtonComponent key={i} className={className} onClick={() => onClick(i)}>
        {i}
      </ButtonComponent>,
    );
  }
  return <>{!!props.entriesCount && <div className="container">{pageLinks}</div>}</>;
};

export default PaginationComponent;
