import React, { Component } from "react";
import * as actions from "../../actions/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Logout extends Component {
  componentDidMount() {
    this.props.logoutAction();
    this.props.memberLogout();
    this.props.adminLogout();
  }
  render() {
    return <Redirect to="/" />;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => dispatch(actions.logout()),
    memberLogout: () => dispatch(actions.memberLogout()),
    adminLogout: () => dispatch(actions.adminLogout())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Logout);
