import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;