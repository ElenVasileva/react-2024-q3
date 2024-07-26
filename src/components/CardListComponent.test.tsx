import CardListComponent from './CardListComponent';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { getFakePerson } from '../types/Person';
import { Provider } from 'react-redux';
import { store } from '../store';

test('CardList displays an appropriate message if no cards are present', () => {
  render(<CardListComponent data={[]} />);
  const message = screen.getByText(/No data/i);
  expect(message).toBeInTheDocument();
});

const personList = [getFakePerson('name', 1), getFakePerson('2', 2)];

test('CardList renders the specified number of cards', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CardListComponent data={personList} />
      </MemoryRouter>
    </Provider>,
  );
  const listItems = await screen.findAllByRole('listitem');
  expect(listItems.length).toBe(personList.length);
});

test('Check boxes could be clicked', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CardListComponent data={personList} />
      </MemoryRouter>
    </Provider>,
  );
  const checkboxes = screen.getAllByRole('checkbox');
  expect(checkboxes.length).toBe(personList.length);
  const checkbox = checkboxes[0] as HTMLInputElement;
  expect(checkbox.checked).toBe(false);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(false);
});
