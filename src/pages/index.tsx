import { GetServerSideProps } from 'next';
import PageData from '../types/PageData';
import PageParams from '../types/PageParams';
import Page from '../components/Page/Page';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { search, page } = context.query;

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
      data: data,
      pageParams: {
        page: +(page || 1),
        search: search || '',
      },
    },
  };
};

const Index = ({ data, pageParams }: { data: PageData; pageParams: PageParams }) => {
  return <Page data={data} pageParams={pageParams} />;
};

export default Index;
