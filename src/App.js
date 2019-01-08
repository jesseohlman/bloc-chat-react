import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import { BrowserRouter } from 'react-router-dom'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBsRjFfGzk2G2ezQ2cUU79ah-5CRiC39eA",
    authDomain: "bloc-chat-2-3b676.firebaseapp.com",
    databaseURL: "https://bloc-chat-2-3b676.firebaseio.com",
    projectId: "bloc-chat-2-3b676",
    storageBucket: "bloc-chat-2-3b676.appspot.com",
    messagingSenderId: "367123375755"
  };
  firebase.initializeApp(config);


 class App extends Component {
    render() {
      return (
        <div className="App">
          <header>
            <div className="columns is-centered is-full">
              <nav className="navbar" />
            </div>
            <h1 className="title has-text-centered is-2 has-text-success">
              Bloc Chat
            </h1>
            <main>
              <RoomList firebase={firebase} />
            </main>
          </header>
        </div>
      );
    }
  }

export default App;
