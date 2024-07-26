import { configureStore } from '@reduxjs/toolkit';
import checkedItemReducer from './features/checkedItemsSlice';
import { personApi } from './services/person';

export const store = configureStore({
  reducer: {
    checkedItems: checkedItemReducer,
    [personApi.reducerPath]: personApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(personApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
