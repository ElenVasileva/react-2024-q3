import { Person } from './App';

export const getItems = async (page: number, searchString: string) => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${searchString}&page=${page}`)
    .then((response) => response.json())
    .then(({ results }: { results: Person[] }) => results);

  return response;
};

export const getItem = async (id: number) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json())
    .then((data: Person) => data);

  return response;
};
