import React from 'react';
import { Link } from 'react-router-dom';
import useCounter from '../hooks/useCounter';
import useTodo from '../hooks/useTodo';

function Home() {
  const { count } = useCounter();
  const { todoList } = useTodo();
  return (
    <div>
      <h1>Home</h1>
      <p>現在のCounterの値: {count}</p>
      <p>現在のTodoListの件数: {todoList.length}</p>
      <p>
        <Link to="/counter">Counterへ</Link>
        <Link to="/todo-list">TodoListへ</Link>
      </p>
    </div>
  );
}

export default Home;
