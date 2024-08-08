import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './Page';
import { getFakePerson } from '../../types/Person';

const data = {
  results: [getFakePerson('name', 1), getFakePerson('2', 2)],
  count: 2,
};
const pageParams = {
  page: 1,
  search: '',
};

global.URL.createObjectURL = jest.fn();

test('PersonsPage is rendered', () => {
  render(<Page data={data} pageParams={pageParams} />);
});

test('Check boxes could be clicked', async () => {
  render(<Page data={data} pageParams={pageParams} />);
  const checkboxes = screen.getAllByRole('checkbox');

  const checkbox = checkboxes[0] as HTMLInputElement;
  expect(checkbox.checked).toBe(false);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(false);
});
