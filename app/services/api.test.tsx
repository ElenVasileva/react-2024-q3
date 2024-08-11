import '@testing-library/jest-dom';

import { getCard, getData } from './api';

global.fetch = jest.fn((url: string) =>
  Promise.resolve({
    json: () => {
      const json =
        url.indexOf('?') >= 0
          ? {
              count: 7,
              results: [
                {
                  name: 'Luke Skywalker',
                  height: '172',
                  mass: '77',
                  hair_color: 'blond',
                  skin_color: 'fair',
                  eye_color: 'blue',
                  birth_year: '19BBY',
                  gender: 'male',
                  url: 'https://swapi.dev/api/people/1/',
                },
                {
                  name: 'C-3PO',
                  height: '167',
                  mass: '75',
                  hair_color: 'n/a',
                  skin_color: 'gold',
                  eye_color: 'yellow',
                  birth_year: '112BBY',
                  gender: 'n/a',
                  url: 'https://swapi.dev/api/people/2/',
                },
                {
                  name: 'R2-D2',
                  height: '96',
                  mass: '32',
                  hair_color: 'n/a',
                  skin_color: 'white, blue',
                  eye_color: 'red',
                  birth_year: '33BBY',
                  gender: 'n/a',
                  url: 'https://swapi.dev/api/people/3/',
                },
              ],
            }
          : {
              name: 'Luke Skywalker',
              height: '172',
              mass: '77',
              hair_color: 'blond',
              skin_color: 'fair',
              eye_color: 'blue',
              birth_year: '19BBY',
              gender: 'male',
              url: 'https://swapi.dev/api/people/1/',
            };
      return Promise.resolve(json);
    },
  }),
) as jest.Mock;

test('getCard returns correct data', async () => {
  const cardData = await getCard({ idParam: '1' });
  expect(cardData.person.name === 'Luke Skywalker');
});

test('getData returns correct data', async () => {
  const data = await getData({ idParam: '1' });
  expect(data.data.results.length === 3);
});
