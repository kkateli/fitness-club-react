import React, { Component } from "react";
import Nav from "../components/Nav/Nav";
import "./PageBuilder.css";
import Banner from "../components/Banner/Banner";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import { Route, Switch } from "react-router-dom";
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
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import Questions from "../Questions/Questions";
import Home from "../components/Home/Home";

class PageBuilder extends Component {
  componentDidMount() {
    this.props.checkAuthAction();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/home" exact component={Banner} />
        <Route path="/" exact component={Home} />
        <Route path="/whatWeDo" component={WhatWeDo} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/questions" component={Questions} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.ifAuth) {
      routes = (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/whatWeDo" component={WhatWeDo} />
          <Route path="/activities" component={Activities} />
          <Route path="/memberPost" component={Customers} />
          <Route path="/newPost" component={NewPost} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/yoga" component={Yoga} />
          <Route path="/cardio" component={Cardio} />
          <Route path="/weight" component={Weight} />
          <Route path="/logout" component={Logout} />
          <Route path="/questions" component={Questions} />
          <Route path="/home" exact component={Banner} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Nav />
        {routes}
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return { ifAuth: state.auth.token != null };
};
const mapDispatchToProps = dispatch => {
  return { checkAuthAction: () => dispatch(actions.authCheck()) };
};
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(PageBuilder);
