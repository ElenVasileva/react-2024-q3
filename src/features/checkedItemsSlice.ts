import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Person from '../types/Person';

export interface CheckedItemsState {
  value: Person[];
}

const initialState: CheckedItemsState = {
  value: [],
};

export const checkedItemsSlice = createSlice({
  name: 'checkedItems',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Person>) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<Person>) => {
      state.value.splice(state.value.indexOf(action.payload), 1);
    },
    unselectAll: (state) => {
      state.value.splice(0, state.value.length);
    },
  },
});

export const { addItem, removeItem, unselectAll } = checkedItemsSlice.actions;

export default checkedItemsSlice.reducer;
