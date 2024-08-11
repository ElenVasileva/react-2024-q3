import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getFakePerson } from '../../types/Person';
import DetailedItem from './DetailedItem';

const person = getFakePerson('name', 1);

test('DetailedItem renders', async () => {
  render(<DetailedItem person={person} pageParams={{ page: 1, search: '' }} />);
  const el = await waitFor(() => screen.getByText(/Height/i));
  expect(el).toBeInTheDocument();
});
