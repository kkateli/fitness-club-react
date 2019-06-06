import React from "react";
import {Link} from "react-router-dom";
const sidebar = () => {
  return (
    <div>
      <header className="sidebar-header" role="banner">
        <h1 className="sidebar-logo">
          
            Keep <span>Traning</span>
          
        </h1>
        <div className="sidebar-nav-wrap">
          <nav className="sidebar-main-nav" role="navigation">
            <ul className="sidebar-unstyled sidebar-list-hover-slide">
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'whatWeDo'}>What We Do</Link>
              </li>
              <li>
                <Link to={'signin'}>Sign in</Link>
              </li>
              <li>
                <Link to={'activities'}>Activities</Link>
              </li>
              <li>
                <Link to={'memberPost'}>Member Posts</Link>
              </li>
              <li>
                <Link to={'newPost'}>New Post</Link>
              </li>
              <li>
                <Link to={'documentation'}>Documentation</Link>
              </li>
            </ul>
          </nav>
          
        </div>
      </header>
    </div>
  );
};
export default sidebar;
