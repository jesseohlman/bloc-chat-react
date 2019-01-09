import React, {Component} from 'react';

class User extends Component {
constructor(props){
    super(props);

    this.state={
        
    }
}
componentDidMount(){
this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user.displayName);
  });
}

render(){
    return(
        <div>
            <button onClick={()=>this.props.handleSignIn()}>sign-in</button>
            <button onClick={()=>this.props.handleSignIn()}>sign-out</button>
            <div>{this.props.currentUser}</div>
        </div>
    )
}
}

export default User;