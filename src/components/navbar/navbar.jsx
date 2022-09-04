import React from "react";
import PropTypes from "prop-types";

import { Navbar as NavMenu, Nav, Button } from "react-bootstrap";

import "./navbar.scss";

export function Navbar({ username }) {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
    <NavMenu className="main-nav" expand="lg">
      {/* <Container> */}
      <NavMenu.Brand className="text-light">BW movies</NavMenu.Brand>
      <NavMenu.Toggle aria-controls="basic-navbar-nav" />
      <NavMenu.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {isAuth() && <Nav.Link href="/">Home</Nav.Link>}
          {isAuth() && <Nav.Link href={`/users/${username}`}>{username}</Nav.Link>}

          {isAuth() && <Button onClick={onLoggedOut}>Logout</Button>}
          {!isAuth() && <Nav.Link href="/">Sign-in</Nav.Link>}
          {!isAuth() && <Nav.Link href="/register">Sign-up</Nav.Link>}
        </Nav>
      </NavMenu.Collapse>
      {/* </Container> */}
    </NavMenu>
  );
}

Navbar.propTypes = {
  username: PropTypes.string,
};