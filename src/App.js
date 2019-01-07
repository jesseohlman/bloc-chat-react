import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

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
  constructor(props){
    super(props);

    this.state = {
      rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
