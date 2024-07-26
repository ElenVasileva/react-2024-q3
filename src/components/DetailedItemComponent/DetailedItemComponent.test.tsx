import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { getFakePerson } from '../../types/Person';
import DetailedItemComponent from './DetailedItemComponent';

const person = getFakePerson('name', 1);

test('DetailedItem renders', async () => {
  const router = createMemoryRouter([
    {
      path: '*',
      element: <DetailedItemComponent person={person} />,
    },
  ]);
  render(<RouterProvider router={router} />);
  const el = await waitFor(() => screen.getByText(/Height/i));
  expect(el).toBeInTheDocument();
});
