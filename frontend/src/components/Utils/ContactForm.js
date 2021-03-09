import React, { useState, useEffect } from "react";

export default function ContactForm(props) {
    const [active, setactive] = useState(true);
    const holders = props.holders;

    useEffect(() => {
        document.getElementById("contact-form-submit-button").onclick = function(e) {
            active ? setactive(false) : setactive(true);
            // console.log(e.target.text);
            let formData = {};
            holders.map((holder) => {
                const target = document.getElementById(`input-${holder}`)
                formData[holder] = target.value;
                target.value = "";
            });
            console.log(formData);
            console.log(active);
            // the formdata can now be sent to the backend api to perform the further tasks!
        }
        
    })
    
    useEffect(() => {
        document.getElementById("notif").style.color = active ? "var(--primary-color)" : "var(--white)";
        holders.map((holder) => {
            const target = document.getElementById(`input-${holder}`)
            const child = document.getElementById(`input-tag-${holder}`);
            const addFunction = function() {
                child.style.transform = "translate(0px, -20px)";
                child.style.fontSize = "12px";
                child.style.color = "#676767";
            }
            
            target.onmouseover = addFunction;
            target.onclick = addFunction;
            target.oninput = addFunction;
            
            target.onmouseleave = function() {
                if (target.value === "") {
                    child.style.transform = "translate(0px, 0px)";
                    child.style.fontSize = "16px";
                    child.style.color = "#fff";
                }
            }
        })


    });

    return (
        <div className="form-container">
            {holders.map((holder) => {
                return (
                    <div className="input-div">
                        <p id={`input-tag-${holder}`} className="input-tag">{holder}</p>
                        <input id={`input-${holder}`} type="text"/>
                    </div>
                );
            })}
            <button id="contact-form-submit-button" className="input-button">{active ? "Send" : "Send Another?"}</button>
            <span id="notif">We have recieved your message. We'll resond ASAP</span>
        </div>
    );
}