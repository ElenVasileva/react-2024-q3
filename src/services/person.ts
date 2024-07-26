import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Person from '../types/Person';
import PageData from '../types/PageData';
export interface PersonQueryParams {
  search: string;
  page: number;
}
export const personApi = createApi({
  reducerPath: 'people',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPersonById: builder.query<Person, string>({
      query: (id) => `people/${id}`,
    }),
    getPersons: builder.query<PageData, PersonQueryParams>({
      query: (params) => `people/?search=${params.search}&page=${params.page}`,
    }),
  }),
});
