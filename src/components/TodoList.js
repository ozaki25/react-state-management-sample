import React from 'react';
import { Link } from 'react-router-dom';

function TodoList() {
  return (
    <div>
      <h1>TodoList</h1>
      <p>
        <Link to="/">Homeへ</Link>
        <Link to="/counter">Counterへ</Link>
      </p>
    </div>
  );
}

export default TodoList;
