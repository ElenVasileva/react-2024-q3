import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

global.URL.createObjectURL = jest.fn();

test('Header is rendered', () => {
  render(<Header />);

  const el = screen.getByText('Simple React Application');
  expect(el).toBeInTheDocument();
});
