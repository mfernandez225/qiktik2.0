import React from "react";
import Home from "../../client/src/pages/Home/index.js";
import Signup from "../../client/src/pages/Signup/index.js";
import Login from "../../client/src/pages/Login/index.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App"  id="bodyy">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
