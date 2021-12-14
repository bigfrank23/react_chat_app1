import React, {useState, useEffect } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'

import './Chat.css'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import TextContainer from "../TextContainer/TextContainer";

let socket;

export default function Chat({location}) {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [click, setClick] = useState(false);

    const ENDPOINT = "localhost:5000";

    useEffect(() => {
      // effect
      const { name, room } = queryString.parse(location.search);

      socket = io(ENDPOINT);

      setName(name);
      setRoom(room);

      socket.emit('join', {name, room}, ()=>{
      })

      return()=>{
        socket.emit('disconnect');

        socket.off();
      }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
      socket.on('message', (message)=>{
        setMessages([...messages, message])
      });
      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
    }, [messages])

    const sendMessage = (e) => {
      e.preventDefault();

      if (message) {
        socket.emit('sendMessage', message, ()=> setMessage(''));
      }
    }

    console.log(message, messages);

    function handleClick(){
      setClick(!click)
    }

    // Function for sending messages
    return (
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
        <div className="toggle" onClick={handleClick}>
          <i className={click ? "fa fa-close" : "fa fa-square-o"} />
        </div>
        {click ? <TextContainer users={users} /> : null}
      </div>
    );
}
