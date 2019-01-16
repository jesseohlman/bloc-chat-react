import React, {Component} from 'react';
import ActiveRoom from './ActiveRoom'

class RoomList extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          rooms: [],
          inputValue: '',
          currentRoom: '',
          deleteName: ''
        };
    
        this.roomsRef = this.props.firebase.database().ref('rooms');
    }      
    

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) })
        });
    }

    createRoom(roomName){
        this.roomsRef.push({
            name: roomName
        });
    }
    
    updateInput(txt){
      this.setState({inputValue: txt.target.value})
    }

    updateDelete(txt){
        this.setState({deleteName: txt.target.value});
    }

    deleteRoom(room){
        const index = this.roomsRef.findIndex(this.roomsRef.name === room);
        this.roomsRef.name.splice(index, 1);
    }


render(){
return(
   
   <div className="chat-rooms">
<div>{console.log(this.roomsRef)}</div>

<table>
      <tbody>
            <tr>
            {
              this.state.rooms.map( (room) =>
            <td key={room.key} onClick={()=>this.props.handleRoomClick(room)}>{room.name}</td>
             )}
       </tr>
       
          </tbody>
</table>
<div>
<form>
<div>
<input id="new-room"type="text" onChange={(txt)=>this.updateInput(txt)}/>
<label for="new-room">Enter the room's name</label>
</div>
<input type="submit" onClick={()=>this.createRoom(this.state.inputValue)}/>
<input type="text" onChange={(txt)=>this.updateDelete(txt)}/>
<button onClick={()=>this.deleteRoom(this.state.deleteName)}>delete</button>
</form>
<div>
</div>
</div>
</div>
)
}
}
export default RoomList;