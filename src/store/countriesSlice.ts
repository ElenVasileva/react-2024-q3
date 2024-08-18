import { createSlice } from '@reduxjs/toolkit';
import countries from '../constants/countries';

export interface FormDataState {
  value: string[];
}

const initialState: FormDataState = {
  value: countries,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
