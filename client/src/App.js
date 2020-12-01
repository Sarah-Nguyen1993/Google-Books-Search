import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/saved" component={Saved}/>
          <Route exact path={["/","/search"]} component={Search}/>
          <Route  component={NoMatch}/>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
