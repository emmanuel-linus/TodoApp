import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  //   handleScroll = () => {};

  render() {
    return (
      //   <div className="hook" onScroll={this.handleScroll}>

      <div className="nav">
        {/* <h1>Amazing Colors</h1> */}
        <NavLink activeClassName="design" to="/" exact={true}>
          Register
        </NavLink>
        <NavLink activeClassName="design" to="/Todo">
          Todo
        </NavLink>
        <NavLink activeClassName="design" to="/Like">
          LikeApp
        </NavLink>
        <NavLink activeClassName="design" to="/About">
          About
        </NavLink>
        <NavLink activeClassName="design" to="/Contact">
          Contact
        </NavLink>
        <NavLink activeClassName="design" to="/service">
          service
        </NavLink>
        <NavLink activeClassName="design" to="/Log">
          Login
        </NavLink>
      </div>
    );
  }
}
export default Navbar;
