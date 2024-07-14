import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BadComponent from './BadComponent';

test('BadComponent is rendered and shows throw error button', () => {
  render(<BadComponent />);
  const message = screen.getByText('Throw error');
  expect(message).toBeInTheDocument();
});
