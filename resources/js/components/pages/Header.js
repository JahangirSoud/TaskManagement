import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { Button } from 'react-bootstrap';


const Header = () => {
  const [publicURL, setPublicURL] = useState("/test/");

  return (  
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav><Link to={`${publicURL}`}>Home    </Link></Nav>
        <Nav><Link to={`${publicURL}about`}>About   </Link></Nav>
        <Nav><Link to={`${publicURL}createNew`}>New  </Link></Nav>
        <Nav><Link to={`${publicURL}contact`}>Contact  </Link></Nav>
        <Nav><Link to={`${publicURL}register`}>register  </Link></Nav>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item ></NavDropdown.Item>
          <NavDropdown.Item ></NavDropdown.Item>
          <NavDropdown.Item ></NavDropdown.Item>
          
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;
