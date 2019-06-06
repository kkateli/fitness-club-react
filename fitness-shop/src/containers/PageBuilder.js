import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import "./PageBuilder.css";
import Banner from "../components/Banner/Banner";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import { Route, Switch} from "react-router-dom";
import Customers from "../components/Customers/Customers";
import NewPost from "../components/NewPost/NewPost";
import Documentation from "../components/Documentation/Documentation";
import Activities from "../components/Activities/Activities";
import Yoga from "../components/Activities/Yoga/Yoga";
import Cardio from "../components/Activities/Cardio/Cardio";
import Weight from "../components/Activities/Weight/Weight";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";
import Logout from "../components/Logout/Logout";
import * as actions from "../actions/actions";
import {connect} from "react-redux";


class PageBuilder extends Component {
  componentDidMount(){
    this.props.checkAuthAction();
  }
  
  render() {
    return (
      <div>
        <Nav />
        <Route path="/" exact component={Banner} />
        <Route path="/whatWeDo" component={WhatWeDo} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/activities" component={Activities} />
        <Route path="/memberPost" component={Customers} />
        <Route path="/newPost" component={NewPost} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/yoga" component={Yoga} />
        <Route path="/cardio" component={Cardio} />
        <Route path="/weight" component={Weight} />
        <Route path="/logout" component={Logout} />
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {checkAuthAction:()=>dispatch(actions.authCheck())}
}
export default connect(null,mapDispatchToProps)(PageBuilder);
