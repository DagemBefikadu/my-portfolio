import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "../Static/DagemLogo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Header() {
  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <>
      <Navbar bg="light" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">| Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar.Brand>
        <Image src={logo} width="300" height="300" />
      </Navbar.Brand>
    </>
  );
}
