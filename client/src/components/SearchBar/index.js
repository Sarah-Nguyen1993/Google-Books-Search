import React from "react";

function SearchBar(props) {

  return (
          <div className="form-group">
            <h5>Book Search</h5>
            <input className="form-control" {...props} />
          </div>  
  );
}

export default SearchBar;