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
    menuClicked: false,
    ifVanish: true
  };
  clickMenuHandler = () => {
    this.setState({ menuClicked: !this.state.menuClicked });
  };

  clickVanish = () => {
    this.setState({ ifVanish: !this.state.ifVanish });
  };

  render() {
    let sidebar = null;
    if (this.state.menuClicked) {
      sidebar = (
        <div>
          <Sidebar clickButtonHandler={this.clickMenuHandler} ifAuthControl={this.props.ifAuth} />
          <Backdrop backdropClicked={this.clickMenuHandler} />
        </div>
      );
    }

    let nav = null;
    if (!this.state.ifVanish) {
      nav = (
        <div>
        <Navbar
          id="navbar"
          
          expand="lg"
          className="navbar navbar-expand-md navbar-light"
          collapseOnSelect={true}
        >
          <Container>
            <Navbar.Brand className="navbar-brand logo">
              <div>
                <Link to="/home">
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
                      to="/home"
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
        <div className="dropup-mark-active" onClick={this.clickVanish}>
        <div className="dropup-active">
        <i className="icofont-caret-up" />
      </div>
        </div>
        
      </div>
      );
    }

    return (
      <div>
        <div className="sidebar-nav">
          <div className="nav-menu" onClick={this.clickMenuHandler}>
            <i className="icofont-navigation-menu" />
          </div>
        </div>

        {sidebar}
        <div className="real-nav">
          {nav}
          {this.state.ifVanish ?(
            <div className="mark-wrap" onClick={this.clickVanish}>
            <div className="dropup-mark">
              <i className="icofont-caret-up" />
            </div>
          </div>
          ) :null}
          
        </div>
      </div>
    );
  }
}

//Default Props
NavBar.defaultProps = {
  MainLogo: require("../../assets/image/logo.png")
};
const mapStateToProps = state => {
  return { ifAuth: state.auth.token != null, userEmail: state.auth.userEmail };
};

export default connect(
  mapStateToProps,
  null
)(NavBar);
