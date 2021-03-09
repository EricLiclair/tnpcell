import React, { useState, useEffect } from "react";

export default function Navigation(props) {
    const [toggle, setToggle] = useState("off");
    const toggleNavbar = function() {
        toggle === "off" ? setToggle("on") : setToggle("off");
    }
    let states = [];
    for (let state in props.states) {
        states.push(state);
    }

    useEffect(() => {
        const linkContainer = document.getElementById("links-container");
        const toggleIcon = document.getElementById("navigation-toggle");
        if (toggle === "off") {
            document.getElementById("navigation").style.width = 0;
            const x = document.getElementsByClassName("nav-link");
            for (let i = 0; i < x.length; i++) {
                x[i].style.color = "var(--primary-color)";
              }
            toggleIcon.style.color = "#25282a";
            linkContainer.style.transform = "translateX(100%)";
        } 
        if (toggle === "on") {
            const x = document.getElementsByClassName("nav-link");
            for (let i = 0; i < x.length; i++) {
                x[i].style.color = "var(--white)";
              }
            document.getElementById("navigation").style.width = screen.width > 767 ? "40vw" : "100vw";
            toggleIcon.style.color = "#ffffff";
            linkContainer.style.transform = "translateX(0%)";
        }
    });
    
    return (
        <div id="navigation">
            <div className="navbar"></div>
            <div>
                <a className="logo-container" href="/">
                    <span className="logo">T&P Cell</span>
                    <span className="logo-support">IIIT Ranchi</span>
                </a>
            </div>
            <div className="navigation-toggle" id="navigation-toggle" onClick={toggleNavbar}>
                {toggle === "off" ? <i class="fas fa-grip-lines"></i> : <i class="fas fa-times"></i>}
            </div>
            <div className="links-container" id="links-container">
                {states.map((state) => {
                    return (
                        <a href={props.states[state]} onClick={toggleNavbar} className="link"><span className="nav-link">{state}</span></a>
                    );
                })}
            </div>
        </div>
    );
}