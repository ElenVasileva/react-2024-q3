import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageParams from '../../types/PageParams';
import SearchComponent from './SearchComponent';
import userEvent from '@testing-library/user-event';

const testSearchString = 'er';

test('Search is rendered and shows initial search string', () => {
  const params: PageParams = { page: 1, search: testSearchString };
  render(<SearchComponent pageParams={params} />);

  const searchButton = screen.getByText('Search');
  expect(searchButton).toBeInTheDocument();

  const input = screen.getByDisplayValue(testSearchString);
  expect(input).toBeInTheDocument();
});

test('User can enter search string', async () => {
  render(<SearchComponent pageParams={{ page: 1, search: '' }} />);

  const input = screen.getByRole('textbox');
  const user = userEvent.setup();
  await user.type(input, testSearchString);

  expect(input).toHaveValue(testSearchString);
});
