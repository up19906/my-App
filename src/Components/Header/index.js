import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./sty.scss";

export default class Header extends React.Component {
  state = {
    nav: false,
    sticky: "",
    src: "Picture/logo/ast2.png",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    if (window.pageYOffset >= 50) {
      if (!this.state.nav) {
        this.setState({ nav: true });
        this.setState({ sticky: "top" });
        this.setState({ src: "Picture/logo/ast1.png" });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
        this.setState({ sticky: "" });
        this.setState({ src: "Picture/logo/ast2.png" });
      }
    }
  };
  render() {
    return (
      <Navbar
        sticky={this.state.sticky}
        className={`navbar ${this.state.nav && "Nav__black"}`}
      >
        <NavLink to="/">
          <Navbar.Brand style={{ fontSize: "1.3rem", fontWeight: "500" }}>
            <img className="logo" alt="" src={this.state.src} /> All Solutions
            Tech Co.,LTD
          </Navbar.Brand>
        </NavLink>
        <Nav className="mr-auto"></Nav>
        <NavLink to="/"></NavLink>
        <div className="header__nav">
          <div className="header__menu">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">
                  {" "}
                  หน้าหลัก
                </NavLink>
              </li>
              <li>
                <NavLink to="/branding" activeClassName="active">
                  บริการของเรา
                </NavLink>
              </li>
              <li>
                <NavLink to="/webdesign" activeClassName="active">
                  {" "}
                  ลูกค้าของเรา
                </NavLink>
              </li>
              <li>
                <NavLink to="/printdesign" activeClassName="active">
                  {" "}
                  เกี่ยวกับเรา
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  ติดต่อเรา
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  EN|TH
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    );
  }
}
