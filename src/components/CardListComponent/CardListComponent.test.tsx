import CardListComponent from './CardListComponent';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { getFakePerson } from '../../types/Person';

test('CardList displays an appropriate message if no cards are present', () => {
  render(<CardListComponent data={[]} pageParams={{ page: 1, search: '' }} />);
  const message = screen.getByText(/No data/i);
  expect(message).toBeInTheDocument();
});

const personList = [getFakePerson('name', 1), getFakePerson('2', 2)];

test('CardList renders the specified number of cards', async () => {
  render(
    <Provider store={store}>
      <CardListComponent data={personList} pageParams={{ page: 1, search: '' }} />
    </Provider>,
  );
  const listItems = await screen.findAllByRole('listitem');
  expect(listItems.length).toBe(personList.length);
});

test('Check boxes could be clicked', async () => {
  render(
    <Provider store={store}>
      <CardListComponent data={personList} pageParams={{ page: 1, search: '' }} />
    </Provider>,
  );
  const checkboxes = screen.getAllByRole('checkbox');

  const checkbox = checkboxes[0] as HTMLInputElement;
  expect(checkbox.checked).toBe(false);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(false);
});
