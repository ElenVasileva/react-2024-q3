import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { StoredData } from '../types/StoredData';

export interface FormDataState {
  value: StoredData[];
}

const initialState: FormDataState = {
  value: [],
};

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState,
  reducers: {
    addUncontrolled: (state, action: PayloadAction<StoredData>) => {
      state.value.unshift(action.payload);
    },
  },
});

export const { addUncontrolled } = uncontrolledFormSlice.actions;

export default uncontrolledFormSlice.reducer;
