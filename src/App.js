import React from 'react';
import {LinkContainer} from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Nav,NavItem, Navbar } from "react-bootstrap";
import './App.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Blogin</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem>Sign up to Blogin</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem >Login to Blogin</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes/>
    </div>
  );
}

export default App;
