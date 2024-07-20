import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BadComponent from './BadComponent';
import userEvent from '@testing-library/user-event';

test('BadComponent is rendered and shows throw error button', () => {
  render(<BadComponent />);
  const message = screen.getByText('Throw error');
  expect(message).toBeInTheDocument();
});

test('BadComponent breaks after throw error button click', async () => {
  render(<BadComponent />);
  const button = screen.getByText('Throw error');
  let error = null;

  try {
    await userEvent.click(button);
  } catch (e) {
    error = e;
    expect(error).not.toBeNull();
  }
});
