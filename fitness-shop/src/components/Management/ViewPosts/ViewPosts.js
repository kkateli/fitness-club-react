import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import "./ViewPosts.css";

class ViewPosts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("https://fitness-club-56fdc.firebaseio.com/.json")
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
        <tr key={index}>
          <td>{index}</td>
          <td>{this.state.posts[e].name}</td>
          <td>{this.state.posts[e].title}</td>
          <td>{this.state.posts[e].content}</td>
          <td>{this.state.posts[e].month}</td>
          <td>{this.state.posts[e].date}</td>
          <td>{this.state.posts[e].tag}</td>
          
        </tr>
      );
    });
    return (
      <div className="postTable">
        <h1>View Posts</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Post Name</th>
              <th>Post Title</th>
              <th>Content</th>
              <th>Month</th>
              <th>Date</th>
              <th>Post tag</th>
            </tr>
          </thead>
          <tbody>{postList}</tbody>
        </Table>
      </div>
    );
  }
}
export default ViewPosts;
