import PageData from './types/PageData';
import Person from './types/Person';

export const getItems = async (page: number, searchString: string) => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${searchString}&page=${page + 1}`)
    .then((response) => response.json())
    .then((result: PageData) => result);

  return response;
};

export const getItem = async (id: number) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json())
    .then((data: Person) => data);

  return response;
};
