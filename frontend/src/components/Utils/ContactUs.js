import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export default function ContactUs(props) {
    const holders = ["Name", "Email", "Organisation", "Message"];
    const to = "/contactform";
    return (
        <div id="ContactUs" className="contactus">
            <div className="headers">
                <h2 className="title white">Contact Us</h2>
            </div>
            <div className="contact-data-container ">
                <div className="map-container">
                    <p className="contactus-title">Location</p>
                    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.0047543957535!2d85.37233311493881!3d23.31558628480539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e5177fc0c16f%3A0xbfbb9b9d4f69f6f5!2sIndian%20Institute%20of%20Information%20Technology%20Ranchi!5e0!3m2!1sen!2sin!4v1615201594118!5m2!1sen!2sin"></iframe>
                    <p className="location">Training and Placement Cell,<br/>Indian Institute of Information Technology Ranchi,<br/>Science & Technology Campus, Khojatoli, Namkum,<br/>Ranchi, Jharkhand<br/>834010</p>
                </div>
                <div className="contact-form-container">
                    <ContactForm holders={holders} />
                </div>
            </div>
        </div>
    );
}