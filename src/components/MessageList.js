import React, {Component} from 'react';


class MessageList extends Component{
    constructor(props){
        super(props);

        this.state = {
            messages: [],
            newMessage: ''
        }

        this.messagesRef = this.props.firebase.database().ref('messages');
    }

    componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
            const message = snapshot.val();
            this.setState({ messages: this.state.messages.concat( message ) });
        });
    }

    filterMessages(arr){
        return arr.filter((item)=>this.props.currentRoom.name === item.roomID);
    }

    compose(e){
        this.messagesRef.push({content: e, 
            roomID: this.props.currentRoom.name, 
            sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
            username: this.props.currentUser});
            var ta = document.getElementById('ta');
            ta.value = '';

    }

    newMessage(txt){
        this.setState({newMessage: txt.target.value});
    }

    render(){
        return(
<div id="message-list">
<div>{console.log(this.state.messages)}</div>
{
    this.filterMessages(this.state.messages).map( (message) => 
  <div>{message.content}</div>
   )}
   <div id="new-message">
   <textarea id="ta"rows="4" cols="50" placeholder="Enter your message here" 
   onChange={(e)=>this.newMessage(e)}></textarea>
   <input type="submit" onClick={()=>this.compose(this.state.newMessage)}/>
   </div>
</div>
        );
    }
}

export default MessageList;