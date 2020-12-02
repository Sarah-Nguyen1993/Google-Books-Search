import React from "react";
import "./style.css";

function ResultContainer({children}){
    return(
        <div className="result-container">
            {children}
        </div>
    )
};

export default ResultContainer;