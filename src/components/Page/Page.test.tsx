import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getFakePageData } from '../../types/PageData';
import Page from './Page';
const data = getFakePageData();
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
