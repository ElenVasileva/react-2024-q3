import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { StoredData } from '../types/StoredData';

export interface FormDataState {
  value: StoredData[];
}

const initialState: FormDataState = {
  value: [],
};

export const reactHookFormSlice = createSlice({
  name: 'reactHookForm',
  initialState,
  reducers: {
    addReactHook: (state, action: PayloadAction<StoredData>) => {
      state.value.unshift(action.payload);
    },
  },
});

export const { addReactHook } = reactHookFormSlice.actions;

export default reactHookFormSlice.reducer;
