import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
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
