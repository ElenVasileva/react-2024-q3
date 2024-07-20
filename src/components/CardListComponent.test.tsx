import CardListComponent from './CardListComponent';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { getFakePerson } from '../types/Person';

test('CardList displays an appropriate message if no cards are present', () => {
  render(<CardListComponent data={[]} />);
  const message = screen.getByText(/No data/i);
  expect(message).toBeInTheDocument();
});

test('CardList renders the specified number of cards', async () => {
  const personList = [getFakePerson('name'), getFakePerson('2')];
  render(
    <MemoryRouter>
      <CardListComponent data={personList} />
    </MemoryRouter>,
  );
  const listItems = await screen.findAllByRole('listitem');
  expect(listItems.length).toBe(personList.length);
});
