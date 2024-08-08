import StoreProvider from '../../StoreProvider';
import { PageData } from '../../types/PageData';
import CardListComponent from '../CardListComponent/CardListComponent';
import DetailedItem from '../DetailedItem/DetailedItem';
import Flyout from '../Flyout/Flyout';
import PaginationComponent from '../PaginationComponent/PaginationComponent';
import SearchComponent from '../Search/SearchComponent';

const Page = ({ person, data, pageParams }: PageData) => {
  return (
    <StoreProvider>
      <SearchComponent pageParams={pageParams} />
      <PaginationComponent entriesCount={data.count} pageParams={pageParams} />
      <div className="container page">
        <CardListComponent data={data.results} pageParams={pageParams} />
        {!!person && <DetailedItem person={person} pageParams={pageParams} />}
      </div>
      <Flyout />
    </StoreProvider>
  );
};

export default Page;
