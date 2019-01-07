import React, {Component} from 'react';

class RoomList extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          rooms: []
        };
    
        this.roomsRef = this.props.firebase.database().ref('rooms');
      }

componentsDidMount(){
    
    this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({rooms: this.state.rooms.concat( room )});
    });
}

render(){
return(
   
   <div className="chat-rooms">
<table>
<tbody>
{this.state.rooms.map((item, index) => {return<tr key={index}><td>{item}</td></tr>})}
</tbody>
</table>
</div>
)
}
}
export default RoomList;