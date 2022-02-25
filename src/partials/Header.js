import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "../Static/DagemLogo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


export default function Header() {

  return (
    <>
      <Navbar.Brand>
        <Image src={logo} width="300" height="300" />
      </Navbar.Brand>
    </>
  );
}
