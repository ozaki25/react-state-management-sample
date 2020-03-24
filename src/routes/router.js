import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/Home';
import Counter from '../components/Counter';
import TodoList from '../components/TodoList';

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/counter" exact>
          <Counter />
        </Route>
        <Route path="/todo-list" exact>
          <TodoList />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default Router;
