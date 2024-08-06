import Providers from '../../providers';
import PageData from '../../types/PageData';
import PageParams from '../../types/PageParams';
import Person from '../../types/Person';
import CardListComponent from '../CardListComponent/CardListComponent';
import DetailedItem from '../DetailedItem/DetailedItem';
import Flyout from '../Flyout/Flyout';
import PaginationComponent from '../PaginationComponent/PaginationComponent';
import SearchComponent from '../Search/SearchComponent';

const Page = ({
  person,
  data,
  pageParams,
}: {
  person?: Person;
  data: PageData;
  pageParams: PageParams;
}) => {
  return (
    <Providers>
      <SearchComponent pageParams={pageParams} />
      <PaginationComponent entriesCount={data.count} pageParams={pageParams} />
      <div className="container">
        <CardListComponent data={data.results} pageParams={pageParams} />
        {!!person && <DetailedItem person={person} pageParams={pageParams} />}
      </div>
      <Flyout />
    </Providers>
  );
};

export default Page;
