import React, { Component } from "react";
import Icofont from "react-icofont";

import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";

class NavBar extends Component {
  state = {
    menuClicked: false
  };
  clickMenuHandler = () => {
    this.setState({ menuClicked: !this.state.menuClicked });
  };
  render() {
    let sidebar = null;
    if (this.state.menuClicked) {
      sidebar = <Sidebar />;
    }
    return (
      <div>
        {/* Start Top Header */}
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
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

              <div className="col-lg-5 col-md-5">
                <div className="social-icons">
                  <ul className="list-inline">
                    <li>
                      <a
                        href={this.props.facebookLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icofont icon="icofont-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={this.props.twitterLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icofont icon="icofont-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={this.props.instagramLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icofont icon="icofont-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Top Header */}

        <Navbar
          id="navbar"
          bg="light"
          expand="lg"
          className="navbar navbar-expand-md navbar-light"
          collapseOnSelect={true}
        >
          <div className="nav-menu" onClick={this.clickMenuHandler}>
            <i className="icofont-navigation-menu" />
          </div>
          <Container>
            <Navbar.Brand className="navbar-brand logo">
              <div>
                <Link to="/">
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
                      to="/"
                      className="smooths nav-link"
                      onClick={this.closeNavbar}
                    >
                      Home
                    </Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Link
                      activeclass="active"
                      to="whatWeDo"
                      className="smooths nav-link"
                      onClick={this.closeNavbar}
                    >
                      What we do
                    </Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Link
                      activeclass="active"
                      to="club"
                      className="smooths nav-link"
                      onClick={this.closeNavbar}
                    >
                      Club
                    </Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Link
                      activeclass="active"
                      to="newPost"
                      className="nav-link"
                      onClick={this.closeNavbar}
                    >
                      New Post
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      activeclass="active"
                      to="documentation"
                      className="nav-link"
                      onClick={this.closeNavbar}
                    >
                      Documentation
                    </Link>
                  </Nav.Item>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="sub-logo">
          <Link to="/">
            <img src={this.props.MainLogo} alt="Logo" />
          </Link>
        </div>
        {sidebar}
      </div>
    );
  }
}

//Default Props
NavBar.defaultProps = {
  MainLogo: require("../../assets/image/logo.png"),

  mailLink: "email@mail.com",
  mail: "example@example.com ",
  numberLink: "+123456",
  Number: "+12345",
  facebookLink: "Facebook link",
  twitterLink: "Twitter link",
  instagramLink: "Ins link"
};
export default NavBar;
