import { configureStore, combineReducers } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    todo: todoReducer,
  }),
});
