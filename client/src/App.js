import React from "react";
import Home from "../../client/src/pages/Home/index.js";
import Login from "../../client/src/pages/Login/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login">
          <Home />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
