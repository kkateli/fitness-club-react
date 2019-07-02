import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import "./Members.css";
class Members extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("https://fitness-members.firebaseio.com/.json")
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const postList = Object.keys(this.state.posts).map((e, index) => {
      return (
        <tr>
          <td>{index}</td>
          <td>{this.state.posts[e].email}</td>
          <td>{String(this.state.posts[e].signupTime)}</td>
        </tr>
      );
    });
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
export default Members;
