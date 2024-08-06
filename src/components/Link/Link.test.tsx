import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeContext } from '../../themes/ThemeContext';
import Link from './Link';

test('Link is rendered with light theme', () => {
  render(
    <ThemeContext.Provider value={'light'}>
      <Link href={'test'}>123</Link>
    </ThemeContext.Provider>,
  );

  const lightLink = screen.getByRole('link');
  expect(lightLink).toHaveClass('light');
});

test('Link is rendered with dark theme', () => {
  render(
    <ThemeContext.Provider value={'dark'}>
      <Link href={'test'}>123</Link>
    </ThemeContext.Provider>,
  );

  const darkLink = screen.getByRole('link');
  expect(darkLink).toHaveClass('dark');
});
