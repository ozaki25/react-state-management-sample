import { createSlice } from '@reduxjs/toolkit';

// Slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      return { count: state.count + 1 };
    },
    decrement(state) {
      return { count: state.count - 1 };
    },
  },
});

// Actions
export const { increment, decrement } = counterSlice.reducers.actions;

// Selectors
export const selectCount = state => state.count;

// Reducer
export const { counterReducer } = counterSlice.reducer;
