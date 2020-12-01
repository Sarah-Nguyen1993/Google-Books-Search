import React from "react";
import Card from "../Card";
import "./style.css";

function ResultContainer(){
    return(
        <div className="result-container">
            <h2>Search Result</h2>
            <Card>result 1</Card>
            <Card>result 2</Card>
        </div>
    )
};

export default ResultContainer;