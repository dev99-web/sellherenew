import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import { AuthContext, FirebaseContext } from './store/Context'
import View from './Pages/Viewpost'
import './App.css';
import Post from './store/PostContext';
import Search from './store/SearchContext';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import AccountPage from './Pages/AccountPage';
import Editpages from './Pages/Editpages';
import CarPage from './Pages/CarPage';
import BikePage from './Pages/BikePage';

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
      <Search>
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
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/account'>
            <AccountPage/>
          </Route>
          <Route path='/edit'>
            <Editpages/>
          </Route>
          <Route path='/car'>
            <CarPage/>
          </Route>
          <Route path='/bike'>
            <BikePage/>
          </Route>
        </BrowserRouter>
      </Post>
      </Search>
    </div>
  );
}

export default App;