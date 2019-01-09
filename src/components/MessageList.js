import React, {Component} from 'react';


class MessageList extends Component{
    constructor(props){
        super(props);

        this.state = {
            messages: [],
            newMessages: ''
        }

        this.messagesRef = this.props.firebase.database().ref('messages');
    }

    componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
            const message = snapshot.val();
            //message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat( message ) });
        });
    }

    filterMessages(arr){
        console.log(this.props.currentRoom.name);
        return arr.filter((item)=>this.props.currentRoom.name === item.roomID);
    }



    render(){
        return(
<div id="message-list">
<div>{console.log(this.state.messages)}</div>
{
    this.filterMessages(this.state.messages).map( (message) => 
  <div>{message.content}</div>
   )}

</div>
        );
    }
}

export default MessageList;