import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTodo from '../hooks/useTodo';

function TodoList() {
  const [inputText, setInputText] = useState('');
  const { todoList, add } = useTodo();
  const onChangeText = event => {
    setInputText(event.target.value);
  };
  const onClick = () => {
    add(inputText);
    setInputText('');
  };
  return (
    <div>
      <h1>TodoList</h1>
      <input onChange={onChangeText} value={inputText} />
      <button onClick={onClick}>追加</button>
      {todoList.map((todo, i) => (
        <p key={i}>{todo.text}</p>
      ))}
      <p>
        <Link to="/">Homeへ</Link>
        <Link to="/counter">Counterへ</Link>
      </p>
    </div>
  );
}

export default TodoList;
