import Person, { getFakePerson } from './Person';

export default interface PageData {
  results: Person[];
  count: number;
}

export const getFakePageData = () => {
  return {
    results: [getFakePerson('name'), getFakePerson('2')],
    count: 2,
  };
};
