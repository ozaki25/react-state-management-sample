import { useSelector, useDispatch } from 'react-redux';
import {
  selectTodoList,
  selectInputText,
  changeText,
  add,
} from '../store/todoSlice';

function useTodo() {
  const dispatch = useDispatch();
  return {
    inputText: useSelector(selectInputText),
    todoList: useSelector(selectTodoList),
    changeText: inputText => dispatch(changeText({ inputText })),
    add: text => dispatch(add({ text })),
  };
}

export default useTodo;
