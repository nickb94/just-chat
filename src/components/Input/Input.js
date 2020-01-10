import React from "react"
import "./Input.css"
import sendIcon from "../../icons/sendIcon.png"


const Input = ({ message, setMessage, sendMessage}) => {

return(

    <form className="form" >
        <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={event=> setMessage(event.target.value)}
            onKeyPress={event=> event.key === "Enter" ? sendMessage(event) : null}//Enter key == send
        />
        <button onClick={event=>sendMessage(event)} className="sendButton"><img className="buttonImage" src={sendIcon} alt="asd"/></button>
    </form>

)

}

export default Input