import { useSelector, useDispatch } from 'react-redux';
import { selectTodoList, add } from '../store/todoSlice';

function useTodo() {
  const dispatch = useDispatch();
  return {
    todoList: useSelector(selectTodoList),
    add: text => dispatch(add(text)),
  };
}

export default useTodo;
