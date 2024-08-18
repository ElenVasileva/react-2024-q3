import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormDataState {
  value: string | undefined;
}

const initialState: FormDataState = {
  value: undefined,
};

export const justSubmittedSlice = createSlice({
  name: 'justSubmitted',
  initialState,
  reducers: {
    addSubmitted: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    removeSubmitted: (state) => {
      state.value = undefined;
    },
  },
});

export const { addSubmitted, removeSubmitted } = justSubmittedSlice.actions;

export default justSubmittedSlice.reducer;
