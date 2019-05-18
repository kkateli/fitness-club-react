import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import "./PageBuilder.css";
import Banner from "../components/Banner/Banner";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import { Route } from "react-router-dom";

class PageBuilder extends Component {
  render() {
    return (
      <div>
        <Nav />

        <Route path="/" exact component={Banner} />
        <Route path="/whatWeDo" component={WhatWeDo} />
      </div>
    );
  }
}
export default PageBuilder;
