import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlobalSpinner from './GlobalSpinner';

test('Spinner is rendered', () => {
  render(<GlobalSpinner />);

  const el = screen.getByText('Loading...');
  expect(el).toBeInTheDocument();
});
