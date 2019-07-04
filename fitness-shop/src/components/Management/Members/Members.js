import React, { Component } from "react";
import { Table } from "react-bootstrap";

import "./Members.css";
import {connect} from "react-redux";
import * as actions from "../../../actions/actions";
class Members extends Component {
  componentDidMount() {
    this.props.memberAction();
    
  }

  render() {
    
    let postList=null;
    if(this.props.memberList.memberList!=null){
      postList = Object.keys(this.props.memberList.memberList).map((e, index) => {
      
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{this.props.memberList.memberList[e].email}</td>
              <td>{String(this.props.memberList.memberList[e].signupTime)}</td>
            </tr>
          );
        });
    }
     
    return (
      <div className="memberTable">
        <h1>View Members</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Member Email</th>
              <th>Signup Time</th>
            </tr>
          </thead>
          <tbody>{postList}</tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
return {
  memberList:state.member
}
}
const mapDispatchToProps = dispatch => {
  return {
    memberAction: () => dispatch(actions.viewMembers())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Members);
