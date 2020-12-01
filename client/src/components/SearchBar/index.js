import React from "react";
import Button from "../Button";

function SearchBar(props) {

  return (
        <div className="form-group">
            <h5>Book Search</h5>
            <input className="form-control" {...props} />
            <Button {...props} >Search </Button>
        </div>
  );
}

export default SearchBar;