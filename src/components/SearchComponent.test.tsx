import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchComponent from './SearchComponent';
import userEvent from '@testing-library/user-event';

const onSearch = jest.fn();

const testSearchString = 'er';

test('Search is rendered and shows initial search string', () => {
  render(<SearchComponent initialSearchValue={testSearchString} onSearch={onSearch} />);

  const searchButton = screen.getByText('Search');
  expect(searchButton).toBeInTheDocument();

  const input = screen.getByDisplayValue(testSearchString);
  expect(input).toBeInTheDocument();
});

test('onSearch is called after click search', async () => {
  render(<SearchComponent initialSearchValue={testSearchString} onSearch={onSearch} />);

  const searchButton = screen.getByText('Search');
  await userEvent.click(searchButton);

  expect(onSearch).toHaveBeenCalled();
});
