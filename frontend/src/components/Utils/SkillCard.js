import React, { useState, useEffect } from "react";

export default function SkillCard(props) {
    const icon = props.icon;
    const title = props.title;
    const description = props.description;
    return (
        <div className="skillcard-container">
            <i class={`fas fa-${icon} skill-icon`}></i>
            <p className="skill-title">{title}</p>
            <p className="skill-description">{description}</p>
            
        </div>
    );
}