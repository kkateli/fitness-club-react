import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./ViewManagement.css"
import axios from "axios";

class ViewManagement extends Component {
  state = {
    admins: []
  };

  componentDidMount() {
    axios
      .get("https://fitness-admin.firebaseio.com/.json")
      .then(response => {
        this.setState({
          admins: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const adminList = Object.keys(this.state.admins).map((e, index) => {
      return (
        <tr>
          <td>{index}</td>
          <td>{this.state.admins[e].email}</td>
          <td>{this.state.admins[e].name}</td>
          <td>{this.state.admins[e].Job}</td>
          <td>{this.state.admins[e].sponsor}</td>
          <td>{String(this.state.admins[e].signupTime)}</td>
        </tr>
      );
    });
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
export default ViewManagement;
