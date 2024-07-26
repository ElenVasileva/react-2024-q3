import CardListComponent from './CardListComponent';
import { personApi } from '../services/person';
import GlobalSpinner from './GlobalSpinner/GlobalSpinner';
import { useEffect } from 'react';

const ResultComponent = ({ page, search, onCountChanged }: { page: number; search: string; onCountChanged: (newCount: number) => void }) => {
  const { data, error, isFetching } = personApi.useGetPersonsQuery({ search, page });
  useEffect(() => {
    onCountChanged(data?.count || 0);
  }, [data]);

  return (
    <>
      <div id="page" className="page">
        {isFetching ? <GlobalSpinner /> : error ? JSON.stringify(error) : <CardListComponent data={data?.results || []} />}
      </div>
    </>
  );
};

export default ResultComponent;
