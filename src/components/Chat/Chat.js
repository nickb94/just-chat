import React, {useState,useEffect} from "react"
import queryString from "query-string"
import io from "socket.io-client"
import Infobar from "../Infobar/Infobar"
import Input from "../Input/Input"
import Messages from "../Messages/Messages"
import RoomMembers from "../RoomMembers/RoomMembers"
import "./Chat.css";


let socket;

//functional component
const Chat = ({ location }) => {
//set states
        const [name ,setName] = useState("");
        const [room ,setRoom] = useState("");
        const [users, setUsers] = useState("");
        const [message, setMessage] = useState("");
        const [messages, setMessages] = useState([]);

const ENDPOINT = "https://just-chat-web.herokuapp.com/";
     
//Hook
    useEffect(()=>{
            const { name, room } = queryString.parse(location.search);
            socket = io(ENDPOINT);
//after recieving info, setting state for current user
            setName(name);
            setRoom(room);
//emits message to server about client asking on 'join' socket    
            socket.emit("join", { name , room },(error)=>{

            }); 
    },[ENDPOINT, location.search])

//listening on socket 'message' on any change in messages array    
    useEffect(()=>{
            socket.on("message", (message)=> {
            setMessages([...messages, message]);
        });

//listening on roomData 
            socket.on("roomData", ({ username })=>{
                setUsers(username);  
            })

//for disconnection
        return ()=>{
            socket.emit("disconnect");
            socket.off();
        }
    },[message, messages])


//function to input message on client side
    const sendMessage = (event) =>{
        event.preventDefault();
        if(message){
        socket.emit("sendMessage", message, () => {
            
            setMessage("");
         })
        }
    }


//JSX
    return(
        <div className="outerContainer">
            <RoomMembers users={users} />
            <div className="container">
                <Infobar room={ room } />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div> 
              
            


        </div>
    );

}


export default Chat;