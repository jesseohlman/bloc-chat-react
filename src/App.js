import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import BrowserRouter from 'react-browser-router';

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyD4VaYHIpKVy6gE7tp6GHY5sz4O-mf_JvM",
  authDomain: "bloc-chat-91f75.firebaseapp.com",
  databaseURL: "https://bloc-chat-91f75.firebaseio.com",
  projectId: "bloc-chat-91f75",
  storageBucket: "bloc-chat-91f75.appspot.com",
  messagingSenderId: "550496973381"
};
firebase.initializeApp(config);

class App extends Component {

  render() {
    return (
      <div className="App">
      <header>
        <div className="columns is-centered is-full">
        <nav className="navbar">
        
        </nav>
        </div>
<h1 className="title has-text-centered is-2 has-text-success">Bloc Jams</h1>
<main>
<BrowserRouter>
<div>
<Route exact path="/" component={RoomList} />
</div>
</BrowserRouter>
</main>
      </header>
      </div>
    );
  }
}

export default App;
