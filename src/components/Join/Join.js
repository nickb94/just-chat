import React,{useState, useEffect}  from "react"
import { Link } from "react-router-dom";
import io from "socket.io-client"
import "./Join.css";
import gitHubIcon from "../../icons/gitHubIcon.png"
const ENDPOINT = "localhost:5000";
let socket;
socket = io(ENDPOINT);

const Join = () => {
//set states
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [error, setError] = useState(false);
    

    useEffect(()=>{
        socket.emit("check",{name, room},(err)=>{
        if( err.error === "Username allowed" || err.error === "Enter name and room"){
            setError(false);
        }else if(err.error === "Username exists"){   
            setError(err);
            }
        }); 
        return()=>{
            socket.emit("disconnect");
            socket.off();
        }
    },[name, room])


    return(
        error ?
        (
            <div className="OuterContainer">
            <div className="InnerContainer">
            <div className="left">
            <h1 className="heading">Just Chat</h1><span role="img" aria-label="hand" className="wave">👋</span>
            <div className="text">
            <h2 className="head1">Open-Source and Free</h2>
            <p className="para1">Learning is best shared, served internet-wide!</p>
            <h2 className="head1">Secured, End 2 End, Guilt-free</h2>
            <p className="para1">These chats are not sold but lost on a refresh, chat freely.</p>
            <h2 className="head1">Feature Packed</h2>
            <p className="para1">Create/join a chatroom, chat emojis, visible room members</p>
            </div>
            <div className="gitIcon"> <a href="https://github.com/nickb94" target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt="asd"/></a> nickb94</div>
            </div>
            <div className="right">
            <div>
            <input placeholder="Name" className="JoinInput" type="text" onChange={(event)=> setName(event.target.value)}  />
            </div>
            <div>
            <input placeholder="Room" className="JoinInput mt-20" type="text" onChange={(event)=> setRoom(event.target.value)} />
            </div>
            <button className="button mt-20 disabled" type="submit" >Get In</button>
            <div className="userPresent">{error.error}</div>    
            </div>
            </div>
            </div>
        ) 

        : 

        (
            <div className="OuterContainer">
            <div className="InnerContainer">
            <div className="left">
            <h1 className="heading">Just Chat</h1><span role="img" aria-label="hand" className="wave">👋</span>
            <div className="text">
            <h2 className="head1">Open-Source and Free</h2>
            <p className="para1">Learning is best shared, served internet-wide!</p>
            <h2 className="head1">Secured, End 2 End, Guilt-free</h2>
            <p className="para1">These chats are not sold but lost on a refresh, chat freely.</p>
            <h2 className="head1">Feature Packed</h2>
            <p className="para1">Create/join a chatroom, chat emojis, visible room members</p>
            </div>
            <div className="gitIcon"> <a href="https://github.com/nickb94" target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt="asd"/></a> nickb94</div>
            </div>
            <div className="right">
            <div>
            <input placeholder="Name" className="JoinInput" type="text" onChange={(event)=> setName(event.target.value)}  />
            </div>
            <div>
            <input placeholder="Room" className="JoinInput mt-20" type="text" onChange={(event)=> setRoom(event.target.value)} />
            </div>
            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={"/chat?name="+name+"&room="+room}
            >
            <button className="button mt-20" type="submit" >Get In</button>
            </Link>
            </div>
            </div>
            </div>
        )
    )
}

export default Join




