import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div className="jumbotron header">{children}</div>
  );
}

export default Jumbotron;
