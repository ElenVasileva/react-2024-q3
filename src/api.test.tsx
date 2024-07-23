import { getItem, getItems } from './api';
import { getFakePageData } from './types/PageData';
import { getFakePerson } from './types/Person';

test('Fetch has been called in getItem', async () => {
  const person = getFakePerson('name', 1);
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(person) })) as jest.Mock;
  const item = await getItem(1);
  expect(item.name).toBe(person.name);
});

test('Fetch has been called in getItems', async () => {
  const result = getFakePageData();
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(result) })) as jest.Mock;
  const items = await getItems(1, '');
  expect(items.results.length).toBe(result.results.length);
});
