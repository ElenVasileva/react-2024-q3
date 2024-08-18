import { configureStore } from '@reduxjs/toolkit';

import uncontrolledFormReducer from './uncontrolledSlice';
import reactHookFormReducer from './reactHookSlice';
import countriesReducer from './countriesSlice';
import justSubmittedReducer from './justSubmittedSlice';

export const store = configureStore({
  reducer: {
    uncontrolledForm: uncontrolledFormReducer,
    reactHookForm: reactHookFormReducer,
    justSubmitted: justSubmittedReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
