import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaginationComponent from './PaginationComponent';
import userEvent from '@testing-library/user-event';

const onPageChange = jest.fn();

const selectedPage = 2;

test('Pagination Component is rendered and shows buttons', () => {
  render(<PaginationComponent entriesCount={54} selectedPage={selectedPage} onPageChange={onPageChange} />);

  const button1 = screen.getByText('1');
  expect(button1).toBeInTheDocument();

  const button = screen.getByText(selectedPage);
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('selected');

  const button6 = screen.getByText('6');
  expect(button6).toBeInTheDocument();
});

test('OnPageChange is called after button click', async () => {
  render(<PaginationComponent entriesCount={54} selectedPage={selectedPage} onPageChange={onPageChange} />);

  const button1 = screen.getByText('1');
  await userEvent.click(button1);
  expect(onPageChange).toHaveBeenCalled();
});
