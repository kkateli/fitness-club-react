import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import "./PageBuilder.css";
import Banner from "../components/Banner/Banner";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import { Route } from "react-router-dom";
import Customers from "../components/Customers/Customers";
import NewPost from "../components/NewPost/NewPost";
import Documentation from "../components/Documentation/Documentation";
import Activities from "../components/Activities/Activities";
import Yoga from "../components/Activities/Yoga/Yoga";
import Cardio from "../components/Activities/Cardio/Cardio";
import Weight from "../components/Activities/Weight/Weight";


class PageBuilder extends Component {
  
  render() {
    return (
      <div>
        <Nav />
        <Route path="/" exact component={Banner} />
        <Route path="/whatWeDo" component={WhatWeDo} />
        <Route path="/activities" component={Activities} />
        <Route path="/MemberPost" component={Customers} />
        <Route path="/newPost" component={NewPost} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/yoga" component={Yoga} />
        <Route path="/cardio" component={Cardio} />
        <Route path="/weight" component={Weight} />
      </div>
    );
  }
}
export default PageBuilder;
