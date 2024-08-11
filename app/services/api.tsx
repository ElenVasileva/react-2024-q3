import { PageData } from 'src/types/PageData';
import PageParams from 'src/types/PageParams';
import Person from 'src/types/Person';

export interface Params {
  pageParam?: string | null;
  searchParam?: string | null;
  idParam?: string | null;
}

export const getCard = async (params: Params): Promise<{ person: Person; pageParams: PageParams }> => {
  const { pageParam, searchParam, idParam } = params;
  const page = Number(pageParam) || 1;
  const search = searchParam || '';
  const pageParams: PageParams = {
    page,
    search,
    selectedCard: Number(idParam),
  };

  const person = await fetchData(`https://swapi.dev/api/people/${idParam}`);
  return { person, pageParams };
};

export const getData = async (params: Params): Promise<PageData> => {
  const { pageParam, searchParam, idParam } = params;
  const page = Number(pageParam) || 1;
  const search = searchParam || '';

  const data = await fetchData(`https://swapi.dev/api/people?page=${page}&search=${search}`);

  const pageData: PageData = {
    data: data,
    pageParams: { page, search },
  };
  if (idParam && Number(idParam)) {
    pageData.pageParams.selectedCard = Number(idParam);
  }

  return pageData;
};

const fetchData = async (url: string) => {
  console.log(`fetch data, url: ${url}`);
  return await (await fetch(url)).json();
};
