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
  for (let i = 0; i < pageCount; i++) {
    const className = props.selectedPage === i ? 'page-button selected' : 'page-button';
    pageLinks.push(
      <button key={i} className={className} onClick={() => onClick(i)}>
        {i + 1}
      </button>,
    );
  }
  return <>{!!props.entriesCount && <div className="container">{pageLinks}</div>}</>;
};

export default PaginationComponent;
