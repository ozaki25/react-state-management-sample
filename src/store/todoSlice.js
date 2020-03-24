import { createSlice } from '@reduxjs/toolkit';

// Slice
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },
  reducers: {
    add(state, action) {
      return {
        todoList: [...state.todoList, { text: action.payload.text }],
      };
    },
  },
});

// Actions
export const { add } = todoSlice.actions;

// Selectors
export const selectTodoList = ({ todo }) => todo.todoList;

// Reducer(must be default export)
export default todoSlice.reducer;
