import React, {Component} from 'react';


class RoomList extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          rooms: []
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


render(){
return(
   
   <div className="chat-rooms">
<div>{console.log(this.state.rooms)}</div>
<h1>test</h1>
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
</div>
)
}
}
export default RoomList;