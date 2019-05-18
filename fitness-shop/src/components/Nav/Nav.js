import React, { Component } from "react";
import Icofont from "react-icofont";
import "./Nav.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div>
        {/* Top Header */}
        <div className="top-header">
          <div className="social-icons">
            <ul className="list-inline">
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
          <div className="address-bar">
            <ul className="list-inline">
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

        {/* //   Top header ends here */}

        <Navbar
          id="navbar"
          bg="light"
          expand="lg"
          className="navbar navbar-expand-md navbar-light"
          collapseOnSelect={true}
        >
          <Container>
          <Navbar.Brand className="navbar-brand logo">
              <div>
                <Link exact to="/">
                  <img src={this.props.MainLogo} alt="Logo" />
                </Link>
              </div>
            </Navbar.Brand>

            
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="navbar-nav ml-auto">
                <div>
                  <Nav.Item>
                    <Link
                      activeclass="active"
                      to="home"
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
  MainLogo: require('../../assets/image/logo.png'),
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
