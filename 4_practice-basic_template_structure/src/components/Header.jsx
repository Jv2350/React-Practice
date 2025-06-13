import React from "react";
import Logo from "../assets/logo512.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Logo" />
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
