import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlyoutComponent from './FlyoutComponent';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import selectedItemsReducer from '../../features/selectedItemsSlice';

global.URL.createObjectURL = jest.fn();

test('Flyout is rendered', () => {
  const store = configureStore({
    reducer: { selectedItems: selectedItemsReducer },
  });
  render(
    <Provider store={store}><FlyoutComponent /></Provider>);

  const el = screen.getByText('Unselect all');
  expect(el).toBeInTheDocument();
});
