import React, {Component} from 'react';

class ActiveRoom extends Component{
constructor(props){
    super(props);

    this.state={
        currentRoom: this.props.currentRoom
    }
}

    render(){
        return(
            <section>
<div>{this.state.currentRoom}</div>
<div></div>
</section>

        )
    }
}

export default ActiveRoom;