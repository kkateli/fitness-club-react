import React, { Component } from "react";
import Icofont from "react-icofont";
import cssClasses from "./Nav.module.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div>
        {/* Top Header */}
        <div className={cssClasses.topHeader}>
          <div className={cssClasses.socialIcons}>
            <ul className={cssClasses.listInline}>
              <li>
                <a href={this.props.facebookLink}>
                  <Icofont icon="icofont-facebook" />
                </a>
              </li>
              <li>
                <a href={this.props.twitterLink}>
                  <Icofont icon="icofont-twitter" />
                </a>
              </li>
              <li>
                <a href={this.props.instagramLink}>
                  <Icofont icon="icofont-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className={cssClasses.addressBar}>
            <ul className={cssClasses.listInline}>
              <li>
                <a href={this.props.mailLink}>
                  <Icofont icon="icofont-email" /> {this.props.mail}
                </a>
              </li>
              <li>
                <a href={this.props.numberLink}>
                  <Icofont icon="icofont-ui-call" /> {this.props.Number}
                </a>
              </li>
            </ul>
          </div>
        </div>
     
      //   Top header ends here
    
    <Navbar
      id="navbar"
      bg="light"
      expand="lg"
      className="navbar navbar-expand-md navbar-light"
      collapseOnSelect={true}
    >
      <Container>
      <Navbar.Toggle
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="collaspe-btn"
        />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="navbar-nav ml-auto">
            <div>
              <Nav.Item>
                <Link
                  activeclass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={800}
                  className="smooths nav-link"
                  onClick={this.closeNavbar}
                >
                  Home
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  activeclass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={800}
                  className="nav-link"
                  onClick={this.closeNavbar}
                >
                  Contact
                </Link>
              </Nav.Item>

            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
      );
  }
}

//Default Props
NavBar.defaultProps = {
  // MainLogo: require(''),
  // Logo2: require(''),
  mailLink: "email@mail.com",
  mail: "example@example.com ",
  numberLink: "+123456",
  Number: "+12345",
  facebookLink: "Facebook link",
  twitterLink: "Twitter link",
  instagramLink: "Ins link"
};
export default NavBar;
