import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link to="/counter">Counterへ</Link>
        <Link to="/todo-list">TodoListへ</Link>
      </p>
    </div>
  );
}

export default Home;
