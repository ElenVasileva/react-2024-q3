import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from '../src/app/page';
import PageWithPageNumberAndCard from '../src/app/[page]/[id]/page';
import PageWithPageNumber from '../src/app/[page]/page';
import PageWithPageNumberAndSearchAndCard from '../src/app/[page]/search/[search]/[id]/page';
import PageWithPageNumberAndSearch from '../src/app/[page]/search/[search]/page';

global.URL.createObjectURL = jest.fn();
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

test('MainPage is rendered', async () => {
  render(await MainPage());
  const el = screen.getByText('Search');
  expect(el).toBeInTheDocument();
});

test('PageWithPageNumber is rendered', async () => {
  render(await PageWithPageNumber({ params: { page: '2' } }));
  const el = screen.getByText('Search');
  expect(el).toBeInTheDocument();
});

test('PageWithPageNumberAndSearch is rendered', async () => {
  render(await PageWithPageNumberAndSearch({ params: { page: '2', search: 'a' } }));
  const el = screen.getByText('Search');
  expect(el).toBeInTheDocument();
});

test('PageWithPageNumberAndSearchAndCard is rendered', async () => {
  render(await PageWithPageNumberAndSearchAndCard({ params: { page: '2', search: 'a', id: '2' } }));
  const el = screen.getByText('Search');
  expect(el).toBeInTheDocument();
});

test('PageWithPageNumberAndCard is rendered', async () => {
  render(await PageWithPageNumberAndCard({ params: { page: '2', id: '2' } }));
  const el = screen.getByText('Search');
  expect(el).toBeInTheDocument();
});
