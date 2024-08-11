import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout';

global.URL.createObjectURL = jest.fn();

test('Header is rendered', () => {
  render(<Layout>123</Layout>);

  const el = screen.getByText('Use dark mode');
  expect(el).toBeInTheDocument();
});

test('Theme could be changed', () => {
  render(<Layout>123</Layout>);

  const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
  const state = checkbox.checked;

  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(!state);
});
