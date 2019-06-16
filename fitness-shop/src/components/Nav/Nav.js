import React, { Component } from "react";
import Icofont from "react-icofont";
import "./Nav.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";
import Backdrop from "../Backdrop/Backdrop";
import { connect } from "react-redux";

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
      sidebar = (
        <div>
          <Sidebar ifAuthControl={this.props.ifAuth} />
          <Backdrop backdropClicked={this.clickMenuHandler} />
        </div>
      );
    }

    return (
      <div>
        <div className="nav-menu" onClick={this.clickMenuHandler}>
          <i className="icofont-navigation-menu" />
        </div>
        {sidebar}
        <div className="real-nav">
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
                    {!this.props.ifAuth ? (
                      <Nav.Item>
                        <Link
                          activeclass="active"
                          to="signin"
                          className="smooths nav-link"
                          onClick={this.closeNavbar}
                        >
                          Sign in
                        </Link>
                      </Nav.Item>
                    ) : null}

                    {this.props.ifAuth ? (
                      <Nav.Item>
                        <Link
                          activeclass="active"
                          to="activities"
                          className="smooths nav-link"
                          onClick={this.closeNavbar}
                        >
                          Activities
                        </Link>
                      </Nav.Item>
                    ) : null}
                    {this.props.ifAuth ? (
                      <Nav.Item>
                        <Link
                          activeclass="active"
                          to="memberPost"
                          className="smooths nav-link"
                          onClick={this.closeNavbar}
                        >
                          Member Posts
                        </Link>
                      </Nav.Item>
                    ) : null}
                    {this.props.ifAuth ? (
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
                    ) : null}

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

              {this.props.ifAuth ? (
                <p className="logoutButton">
                  Hi, {this.props.userEmail.split("@")[0]}
                  <Link to={"/logout"}> Log out</Link>
                </p>
              ) : null}
             
            </Container>
            
          </Navbar>
          <div className="mark-wrap">
          <div className="dropup-mark"><i class="icofont-caret-up"></i></div>
          </div>
         
          {/* <div className="sub-logo">
            <Link to="/">
              <img src={this.props.MainLogo} alt="Logo" />
            </Link>
          </div> */}
          
        </div>
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
const mapStateToProps = state => {
  return { ifAuth: state.auth.token != null, userEmail: state.auth.userEmail };
};

export default connect(
  mapStateToProps,
  null
)(NavBar);
