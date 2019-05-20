import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import "./PageBuilder.css";
import Banner from "../components/Banner/Banner";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import { Route } from "react-router-dom";
import Club from "../components/Club/Club";
import NewPost from "../components/NewPost/NewPost";
import Sidebar from "../components/SideBar/SideBar";


class PageBuilder extends Component {
  
  render() {
    return (
      <div>
        <Nav />
        <Sidebar />

        <Route path="/" exact component={Banner} />
        <Route path="/whatWeDo" component={WhatWeDo} />
        <Route path="/club" component={Club} />
        <Route path="/newPost" component={NewPost} />
      </div>
    );
  }
}
export default PageBuilder;
