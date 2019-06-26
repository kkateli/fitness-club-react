import React from "react";
import { Link } from "react-router-dom";

const sidebar = props => {
  return (
    <div>
      <header className="sidebar-header" role="banner">
        <h1 className="sidebar-logo">
          Keep <span>Traning</span>
        </h1>
        <div onClick = {props.clickButtonHandler} className="sidebar-nav-wrap">
          <nav className="sidebar-main-nav" role="navigation">
            <ul className="sidebar-unstyled sidebar-list-hover-slide">
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"whatWeDo"}>What We Do</Link>
              </li>

              {!props.ifAuthControl ? (
                <li>
                  <Link to={"signin"}>Sign in</Link>
                </li>
              ) : null}

              {props.ifAuthControl ? (
                <li>
                  <Link to={"activities"}>Activities</Link>
                </li>
              ) : null}

              {props.ifAuthControl ? (
                <li>
                  <Link to={"memberPost"}>Member Posts</Link>
                </li>
              ) : null}

              {props.ifAuthControl ? (
                <li>
                  <Link to={"newPost"}>New Post</Link>
                </li>
              ) : null}

              <li>
                <Link to={"documentation"}>Documentation</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
// const mapStateToProps=state=>{
// return {ifAuth:state.auth.token!= null};

// }
export default sidebar;
