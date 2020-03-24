import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment, decrement } from '../store/counterSlice';

function useCounter() {
  const dispatch = useDispatch();
  return {
    count: useSelector(selectCount),
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

export default useCounter;
