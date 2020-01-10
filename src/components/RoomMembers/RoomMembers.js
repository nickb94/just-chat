import React from "react"
import onlineIcon from '../../icons/onlineIcon3.png';
import './RoomMembers.css';


const RoomMembers = ({ users }) => (

    <div className="roomMembers">
    {
      users
        ? (
            <div className="containerDiv">
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
            <h2>
            {users.map(name => (<div key={name.name} className="activeItem"> {name.name}
            <img alt="Online Icon" src={onlineIcon}/>
            </div>
            ))}
            </h2>
            </div>
            </div>
          )
        : null
    }
    </div>
   
)



export default RoomMembers;
