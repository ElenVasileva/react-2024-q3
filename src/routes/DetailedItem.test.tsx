import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailedItem from './DetailedItem';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

test('DetailedItem renders', async () => {
  const routes = [
    {
      path: '/:itemId',
      element: <DetailedItem />,
      loader: () => ({}),
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/123'],
    initialIndex: 1,
  });
  render(<RouterProvider router={router} />);
  const el = await waitFor(() => screen.getByText(/Height/i));
  expect(el).toBeInTheDocument();
});
