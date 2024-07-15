import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchComponent from './SearchComponent';

const onSearch = (searchString: string) => {
  console.log(searchString);
};

const testSearchString = 'er';

test('Search is rendered and shows initial search string', () => {
  render(<SearchComponent initialSearchValue={testSearchString} onSearch={onSearch} />);

  const searchButton = screen.getByText('Search');
  expect(searchButton).toBeInTheDocument();

  const input = screen.getByDisplayValue(testSearchString);
  expect(input).toBeInTheDocument();
});
