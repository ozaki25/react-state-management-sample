import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default Router;
