import { createSlice } from '@reduxjs/toolkit';

// Slice
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    inputText: '',
    todoList: [],
  },
  reducers: {
    changeText(state, action) {
      return {
        ...state,
        inputText: action.payload.inputText,
      };
    },
    add(state, action) {
      return {
        ...state,
        todoList: [...state.todoList, { text: action.payload.text }],
      };
    },
  },
});

// Actions
export const { changeText, add } = todoSlice.actions;

// Selectors
export const selectInputText = ({ todo }) => todo.inputText;
export const selectTodoList = ({ todo }) => todo.todoList;

// Reducer(must be default export)
export default todoSlice.reducer;
