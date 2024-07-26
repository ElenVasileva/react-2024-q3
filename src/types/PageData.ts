import Person, { getFakePerson } from './Person';

export default interface PageData {
  results: Person[];
  count: number;
}

export const getFakePageData = () => {
  return {
    results: [getFakePerson('name', 1), getFakePerson('2', 2)],
    count: 2,
  };
};
