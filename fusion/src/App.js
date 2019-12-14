import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/home";
import Login from "./Login/login";
import Signup from "./Signup/signup";
import Register from "./Register/register"
import NotFound from "./404";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
