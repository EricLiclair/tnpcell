import React, { useState, useEffect } from "react";

export default function StatsGraph(props) {
    const stats = props.stats;
    const branch = props.branch;

    const colors = {
        0: "#c0c0c8",
        1: "#676767",
        2: "#25282a",
    }
    useEffect(() => {
        Object.keys(stats).map((graphValue, index) => {
            const target = document.getElementById(`${branch}-${graphValue}`);
            target.style.height = `${parseInt(stats[graphValue]) * 4}px`;
            target.style.backgroundColor = colors[index];
            target.style.color = colors[index];
        })
    })

    return (
        <div className="stats-graph-container">
            {
                Object.keys(stats).map((graphValue, index) => {
                    return <div className="graph-bar" id={`${branch}-${graphValue}`} ><p>{stats[graphValue]}</p></div>
                })
            }
        </div>
    );
}


// x% 50 = 36