import { PageData } from '../types/PageData';

export interface Params {
  pageParam?: string;
  searchParam?: string;
  idParam?: string;
}

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
    pageData.person = await fetchData(`https://swapi.dev/api/people/${idParam}`);
    pageData.pageParams.selectedCard = Number(idParam);
  }

  return pageData;
};

const fetchData = async (url: string) => {
  console.log(`fetch data, url: ${url}`);
  return await (await fetch(url)).json();
};
