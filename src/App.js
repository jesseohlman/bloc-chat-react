import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import { BrowserRouter } from 'react-router-dom';
import MessageList from './components/MessageList';
import User from './components/User';

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
   constructor(props){
     super(props);

     this.state={
       currentRoom: 'blank',
       rooms: [],
       currentUser: 'guest'
     }
   }


   handleRoomClick(room){
    this.setState({currentRoom: room});
        }

        handleSignIn(){
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider)
          }
        

        handleSignOut(){
          firebase.auth().signOut();
          this.setState({currentUser: 'guest'});
        }

        setUser(user){
          this.setState({currentUser: user});
        }

    render() {
      return (
        <div className="App">
          <header>
            <div className="sign-in-out">
              <User firebase={firebase}
              handleSignIn={()=>this.handleSignIn()}
              handleSignOut={()=>this.handleSignOut()}
              currentUser={this.state.currentUser}
              setUser={(e)=>this.setUser(e)}/>
            </div>
            <h1 className="title">
              Bloc Chat
            </h1>
            <BrowserRouter>
            <main>
              <nav className="navbar">
                <Link to='/messagelist' >view messages in current room</Link>
              </nav>
              <Route path="/messagelist" render={(props) => 
                <MessageList {...props} firebase={firebase}
                   rooms={this.state.rooms}
                    currentRoom={this.state.currentRoom}
              currentUser={this.state.currentUser}/>}/>
            </main>
            </BrowserRouter>
          </header>
          <div>
          <RoomList firebase={firebase} 
            handleRoomClick={(e) => this.handleRoomClick(e)}
          />
          </div>
          
          
        </div>
      );
    }
  }


export default App;
