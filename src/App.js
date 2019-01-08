import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import { BrowserRouter } from 'react-router-dom'

var config = {
  apiKey: "AIzaSyC4FdPuT6IS3Oa1KBZc7btSW6BlQ0L8Rks",
  authDomain: "bloc-chat-3-41648.firebaseapp.com",
  databaseURL: "https://bloc-chat-3-41648.firebaseio.com",
  projectId: "bloc-chat-3-41648",
  storageBucket: "bloc-chat-3-41648.appspot.com",
  messagingSenderId: "997338147084"
};
firebase.initializeApp(config);



 class App extends Component {
    render() {
      return (
        <div className="App">
          <header>
            <div className="nav">
              <nav className="navbar"></nav>
            </div>
            <h1 className="title">
              Bloc Chat
            </h1>
          </header>
          <div>
          <RoomList firebase={firebase} />
          </div>
        </div>
      );
    }
  }

export default App;
