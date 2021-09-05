import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import { AuthContext, FirebaseContext } from './store/Context'
import View from './Pages/Viewpost'
import './App.css';
import Post from './store/PostContext';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    //console.log(user)
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })


  })
  return (

    <div>
      <Post>
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
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/view'>
            <View />
          </Route>
        </BrowserRouter>
      </Post>
    </div>
  );
}

export default App;