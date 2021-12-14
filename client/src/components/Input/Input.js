import React from 'react'

import './Input.css'
export default function Input({message, setMessage, sendMessage}) {
    return (
        <form className="form">
            <input type="text" placeholder="Type a message..." value={message} onChange={(e)=> setMessage(e.target.value)} onKeyPress={(e)=> e.key === 'Enter' ? sendMessage(e) : null} />
            <button className="sendButton" onClick={(e)=> sendMessage(e)}><i className="fa fa-paper-plane" aria-hidden="true" style={{fontSize: "35px"}}></i></button>
        </form>
    )
}
