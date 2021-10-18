import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Classification from "./Classification";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/classification" component={Classification} />
      </Switch>
    </Router>
  );
};

export default App;
