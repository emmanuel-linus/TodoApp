import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Todo from "./Todo";
import Like from "./Like";
import About from "./About"
import Error from "./Error"
import Contact from "./Contact";
import Navbar from "./Navbar";
import Log from "./Log";
import Register from "./Register";




const Router = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Register} exact={true} />
        <Route path="/Todo" component={Todo} />
        <Route path="/like" component={Like} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/log" component={Log} />

        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default Router;
