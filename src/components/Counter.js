import React from 'react';
import { Link } from 'react-router-dom';
import useCounter from '../hooks/useCounter';

function Counter() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>
        <Link to="/">Homeへ</Link>
        <Link to="/todo-list">TodoListへ</Link>
      </p>
    </div>
  );
}

export default Counter;
