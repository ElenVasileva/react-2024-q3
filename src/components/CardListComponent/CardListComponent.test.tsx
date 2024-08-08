import CardListComponent from './CardListComponent';
import { render, screen } from '@testing-library/react';
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
