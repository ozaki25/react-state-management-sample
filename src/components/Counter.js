import React from 'react';
import { Link } from 'react-router-dom';

function Counter() {
  return (
    <div>
      <h1>Counter</h1>
      <p>
        <Link to="/">Homeへ</Link>
        <Link to="/todo-list">TodoListへ</Link>
      </p>
    </div>
  );
}

export default Counter;
