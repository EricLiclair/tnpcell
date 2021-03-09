import React, { useState, useEffect } from "react";

export default function FeatureCard(props) {
    const [read, setread] = useState("less");
    const link = props.link || "";
    const feature = props.feature || "";
    const details = props.featureDetails || "";

    const toggleRead = function() {
        read === "less" ? setread("more") : setread("less");
        
    }

    const length = 250;
    var trimmedFeatureDetails = details.length > length ? details.substring(0, length - 3) + "..." : details.substring(0, details.length); 

    if (feature !== "" && details !== "") {
        return (
            <div className="featurecard-container">
                <p className="featurecard-title">{feature}</p>
                <p className="featurecard-details">{read === "less" ? trimmedFeatureDetails : details}</p>
                {details.length > length ? (
                    <p onClick={toggleRead} className="featurecard-link">{read === "less" ? "Read More" : "Read Less"}</p>
                ):
                null
                }
                
            </div>
        );
    }

    if (link !== "") {
        let linkData = "";
        for (let linkValue in link) {
            linkData = linkValue;
        }
        return (
            <div className="featurecard-container">
                <a href={link[linkData]} className="featurecard-link">{linkData}</a>
            </div>
        );
    }
}