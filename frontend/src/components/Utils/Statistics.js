import React, { useState, useEffect } from "react";
import StatsGraph from "./StatsGraph";

export default function Statistics(props) {
    const allStatistics = props.statistics;
    return (
        <div className="placement-container">
            {   
                Object.keys(allStatistics).map((branch, index) => {
                    return (
                        <div className="stats-branch-container">
                            <p className="stats-branch">{branch}</p>
                            {
                                Object.keys(allStatistics[branch]).map((stats) => {
                                    if (stats === "Students Stats") {
                                        return (
                                            <div className="stats-branch-graph-container">
                                                <StatsGraph branch={branch} stats={allStatistics[branch][stats]} />
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className="stats-branch-salary-container">
                                                {
                                                    Object.keys(allStatistics[branch][stats]).map((salary) => {
                                                        return <p className="stats-branch-salary">{`${salary} - ${allStatistics[branch][stats][salary]} LPA`}</p>
                                                    })
                                                }
                                            </div>
                                        );
                                    }
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}