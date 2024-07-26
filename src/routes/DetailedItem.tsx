import { useParams } from 'react-router-dom';
import GlobalSpinner from '../components/GlobalSpinner/GlobalSpinner';
import { personApi } from '../services/person';
import DetailedItemComponent from '../components/DetailedItemComponent/DetailedItemComponent';

const DetailedItem = () => {
  const { itemId } = useParams();
  const { data, error, isFetching } = personApi.useGetPersonByIdQuery(itemId || '');
  return <>{isFetching ? <GlobalSpinner /> : error ? JSON.stringify(error) : !!data && <DetailedItemComponent person={data}></DetailedItemComponent>}</>;
};

export default DetailedItem;
