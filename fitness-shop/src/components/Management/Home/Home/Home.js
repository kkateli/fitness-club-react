import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.css";
import * as actions from "../../../../actions/actions";
import Chart1 from "../../Chart1/Chart1";

class Home extends Component {
  componentDidMount() {
    this.props.memberAction();
    this.props.adminAction();
  }

  render() {
    let data = null;
    if (
      this.props.members.memberList != null &&
      this.props.admins.adminList != null
    ) {
      data = [
        {
          name: "The number of administrators and members",
          members: Object.keys(this.props.members.memberList).length,
          admins: Object.keys(this.props.admins.adminList).length
        }
      ];
    }
    return (
      <div className="graph-container">
        <Chart1 chart1Data={data} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    members: state.member,
    admins: state.admin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    memberAction: () => dispatch(actions.viewMembers()),
    adminAction: () => dispatch(actions.viewAdmins())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
