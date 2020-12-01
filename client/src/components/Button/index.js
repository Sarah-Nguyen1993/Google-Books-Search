import React from "react";
import "./style.css";

function Button(props) {
  return (
    <span className="btn" {...props} role="button" tabIndex="0">{props.children}
    </span>
  );
}

export default Button;
