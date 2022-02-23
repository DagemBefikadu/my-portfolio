import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "../Static/DagemLogo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Resume from "../Static/REsume.pdf";

export default function Header() {
  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <>
      <Navbar.Brand>
        <Image src={logo} width="300" height="300" />
      </Navbar.Brand>
    </>
  );
}
