import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
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
    // const postList = this.state.posts.map((e, index) => {
    //   return (
    //     <tr>
    //       <td>{index}</td>
    //       <td>{e[index].email}</td>
    //       <td>{String(e[index].signupTime)}</td>
    //     </tr>
    //   );
    // });
    const postList = Object.keys(this.state.posts).map((e, index) => {
        return  (
                <tr>
                  <td>{index}</td>
                  <td>{this.state.posts[e].email}</td>
                  <td>{String(this.state.posts[e].signupTime)}</td>
                </tr>
                
              );
             
    })
    return (
      <div>
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
