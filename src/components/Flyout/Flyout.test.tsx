import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Flyout from './Flyout';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import checkedItemsReducer from '../../features/checkedItemsSlice';
import userEvent from '@testing-library/user-event';

global.URL.createObjectURL = jest.fn();

test('Flyout is rendered', () => {
  const store = configureStore({
    reducer: { checkedItems: checkedItemsReducer },
  });
  render(
    <Provider store={store}>
      <Flyout />
    </Provider>,
  );

  const el = screen.getByText('Unselect all');
  expect(el).toBeInTheDocument();
});

test('Unselect all could be clicked and deselects all', async () => {
  const store = configureStore({
    reducer: { checkedItems: checkedItemsReducer },
  });
  render(
    <Provider store={store}>
      <Flyout />
    </Provider>,
  );

  const button = screen.getByText('Unselect all');
  await userEvent.click(button);

  const el = screen.getByText('0 items selected');
  expect(el).toBeInTheDocument();
});
