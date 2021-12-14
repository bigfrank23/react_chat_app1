import React from 'react'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

import './InfoBar.css'

export default function InfoBar({room}) {
    return (
      <div className="infoBar">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src={onlineIcon} alt="online" />
          <h3 style={{ fontFamily: "-webkit-pictograph"}}>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/">
            <i
              className="fa fa-times"
              aria-hidden="true"
              style={{ color: "#ff0157", fontSize: "50px" }}
            ></i>{" "}
          </a>
        </div>
      </div>
    );
}
