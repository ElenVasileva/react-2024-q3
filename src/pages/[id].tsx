import { GetServerSideProps } from 'next';
import Person from '../types/Person';
import PageData from '../types/PageData';
import PageParams from '../types/PageParams';
import Page from '../components/Page/Page';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, search, page } = context.query;
  const personData = await (await fetch(`https://swapi.dev/api/people/${id}`)).json();

  if (!personData) {
    return {
      notFound: true,
    };
  }

  const response = await fetch(
    `https://swapi.dev/api/people/?search=${search || ''}&page=${page || 1}`,
  );
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      person: personData,
      data: data,
      pageParams: {
        selectedCard: id,
        page: +(page || 1),
        search: search || '',
      },
    },
  };
};

const PersonPage = ({
  person,
  data,
  pageParams,
}: {
  person: Person;
  data: PageData;
  pageParams: PageParams;
}) => {
  return <Page person={person} data={data} pageParams={pageParams} />;
};

export default PersonPage;
