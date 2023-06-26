import { createSlice } from '@reduxjs/toolkit';

type applicationState = {
  abilities: any[];
};

const initialState = {
  abilities: [],
} as applicationState;

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setAbilities: (state, action) => ({ ...state, abilities: action.payload }),
  },
});

export const { setAbilities } = applicationSlice.actions;
export default applicationSlice.reducer;
export const getAbilities = (state) => state?.application?.abilities;
