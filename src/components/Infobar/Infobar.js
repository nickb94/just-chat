import React from "react"
import "./Infobar.css"
import checkmark from "../../icons/room1.png"
import closeIcon from "../../icons/closeIcon.png"
const Infobar = ({ room }) => 

    (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={checkmark} alt="asd"/>
                    <h3>{ room }</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="asd"/></a>
            </div>

        </div>
    )



export default Infobar