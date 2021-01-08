import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./sty.scss";
export default function Header() {
  return (
    <Navbar sticky="top" className="navbar">
      <div className="navigation">
        <NavLink to="/" >
          <Navbar.Brand >
            <img alt="" src="Picture/logo/logo.png" width="30" height="30" />{" "}
            allweb Design
          </Navbar.Brand>
        </NavLink>
      </div>{" "}
      <Nav className="mr-auto"></Nav>
      <NavLink to="/"></NavLink>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/portfolio"> Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/branding">Branding</NavLink>
          </li>
          <li>
            <NavLink to="/webdesign"> Web Design</NavLink>
          </li>
          <li>
            <NavLink to="/printdesign"> Print Design</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}
