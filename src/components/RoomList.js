import React, {Component} from 'react';


class RoomList extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          rooms: [],
          inputValue: ''
        };
    
        this.roomsRef = this.props.firebase.database().ref('rooms');
        console.log( this.roomsRef);
    }      
    

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            console.log(snapshot);
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



render(){
return(
   
   <div className="chat-rooms">
<div>{console.log(this.state.rooms)}</div>

<table>
      <tbody>
            <tr>
            {
              this.state.rooms.map( (room) =>
            <td>{room.name}</td>
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
</form>
<h1>test</h1>
</div>
</div>
)
}
}
export default RoomList;