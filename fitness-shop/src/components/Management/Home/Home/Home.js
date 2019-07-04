import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.css";
import * as actions from "../../../../actions/actions";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

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
        
      data = [{
        name: "The number of administrators and members",
        members: Object.keys(this.props.members.memberList).length,
        admins: Object.keys(this.props.admins.adminList).length
      }
    ]
    }
    return (
        <div className="graph-container">
<BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="members" fill="#8884d8" />
        <Bar dataKey="admins" fill="#82ca9d" />
      </BarChart>
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
