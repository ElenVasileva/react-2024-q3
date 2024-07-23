import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectedItemsState {
  value: string[];
}

const initialState: SelectedItemsState = {
  value: [],
};

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.value.splice(state.value.indexOf(action.payload), 1);
    },
    unselectAll: (state) => {
      state.value.splice(0, state.value.length);
    },
  },
});

export const { addItem, removeItem, unselectAll } = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
