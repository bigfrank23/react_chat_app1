import React, {useState} from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => {
  const [click, setClick] = useState(false);
  function handleClick(){
      setClick(!click)
    }
    const style = { display : "none"}
    return (
      <div className="textContainer">
        {users ? (
          <div>
            <div className = " d-flex justify-content-between">
            <h1
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                fontFamily: "-webkit-pictograph",
              }}
            >
              Active chats
            </h1>
              {/* <i className={"fa fa-close fa-2x"} /> */}
            </div>
            <div className="activeContainer">
              <h2>
                {users.map(({ name }) => (
                  <div
                    key={name}
                    className="activeItem"
                    style={{ textTransform: "capitalize" }}
                  >
                    {name}
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        ) : null}
      </div>
    );};

export default TextContainer;
