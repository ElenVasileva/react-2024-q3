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
      console.log(`add, count: ${state.value.length}`);
    },
    removeItem: (state, action: PayloadAction<Person>) => {
      state.value.splice(state.value.indexOf(action.payload), 1);
      console.log(`remove, count: ${state.value.length}`);
    },
    unselectAll: (state) => {
      state.value.splice(0, state.value.length);
    },
  },
});

export const { addItem, removeItem, unselectAll } = checkedItemsSlice.actions;

export default checkedItemsSlice.reducer;
