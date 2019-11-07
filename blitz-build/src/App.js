import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
