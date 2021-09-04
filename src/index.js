import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseContext } from './store/FirebaseContext';
import App from './App';
import  firebase from './firebase/config'
ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
    <App/>
    </FirebaseContext.Provider>
, document.getElementById('root'));