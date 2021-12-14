import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

export default function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [icon, setIcon] = useState(<i className="fa fa-comments" aria-hidden="true"></i>)
    useEffect(() => {
        setTimeout(() => {
            setIcon(<i className="fa fa-comments-o" aria-hidden="true"></i>);
        }, 5000)
    }, [])
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="mainTitle">
                <h1 className="m0">My</h1>
                <h3 className="text-gray">chat</h3>
                </div>
                <h1 className="heading">{icon}</h1>
                <div> <input type="text" placeholder="Username" className="joinInput" onChange={(e)=> setName(e.target.value)} /> </div>
                <div> <input type="text" placeholder="Room Name" className="joinInput mt-20" onChange={(e)=> setRoom(e.target.value)} /> </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" className="button mt-20">Enter</button>
                </Link>
            </div>
        </div>
    )
}
