import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./ViewManagement.css"
import axios from "axios";
import * as actions from "../../../actions/actions";
import {connect} from "react-redux";
class ViewManagement extends Component {
  state = {
    admins: []
  };

  componentDidMount() {
    this.props.adminAction();
  }

  render() {
    let adminList;
    if(this.props.adminList.adminList!=null){
      adminList = Object.keys(this.props.adminList.adminList).map((e, index) => {
          return (
            <tr>
              <td>{index}</td>
              <td>{this.props.adminList.adminList[e].email}</td>
              <td>{this.props.adminList.adminList[e].name}</td>
              <td>{this.props.adminList.adminList[e].Job}</td>
              <td>{this.props.adminList.adminList[e].sponsor}</td>
              <td>{String(this.props.adminList.adminList[e].signupTime)}</td>
            </tr>
          );

    })}
  
    return (
      <div className="staffTable">
        <h1>View Staff</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Staff Email</th>
              <th>Full Name</th>
              <th>Job Title</th>
              <th>Sponsor</th>
              <th>Signup Time</th>
            </tr>
          </thead>
          <tbody>{adminList}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    adminList:state.admin
  }
  }
  const mapDispatchToProps = dispatch => {
    return {
      adminAction: () => dispatch(actions.viewAdmins())
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(ViewManagement);
