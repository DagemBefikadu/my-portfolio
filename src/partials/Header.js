import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "../Static/DagemLogo.png";
import Navbar from "react-bootstrap/Navbar";



export default function Header() {

  return (
    <>
      <Navbar.Brand>
        <Image src={logo} width="300" height="300" />
      </Navbar.Brand>
    </>
  );
}
