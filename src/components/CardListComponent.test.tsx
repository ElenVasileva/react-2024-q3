import CardListComponent from './CardListComponent';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('an appropriate message is displayed if no cards are present', () => {
  render(<CardListComponent data={[]} />);
  const message = screen.getByText(/No data/i);
  expect(message).toBeInTheDocument();
});
