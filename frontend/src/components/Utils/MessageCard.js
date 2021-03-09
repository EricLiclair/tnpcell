import React, { useState, useEffect } from "react";

export default function MessageCard(props) {
    const [read, setread] = useState("less");

    const toggleRead = function() {
        read === "less" ? setread("more") : setread("less");
    }

    const name = props.name;
    const message = props.message;
    const displayMessage = props.displayMessage;
    const post = props.post;
    const imageLink = props.imageLink;
    return (
        <div className="message-container">
            <div className="message-image-container">
                <img className="message-image" src={imageLink}></img>
            </div>
            <div className="message-data-container">
                {read === "less" ? (
                    <p className="messsage-display-message">
                        <span className="messsage-display-message-apos">“</span>
                        {displayMessage}
                        <br />
                        <span className="messsage-display-message-apos">”</span>
                    </p>
                )
                :
                (
                    <p className="messsage-display-message">
                    {message}
                </p> 
                )
                }
                <p className="messsage-display-name">{name}</p>
                <p className="messsage-display-post">{post}</p>
                <p class="message-link" onClick={toggleRead}>{read === "less" ? "Read Complete Message" : "Continue"}</p>
            </div>
            
        </div>
    );
}