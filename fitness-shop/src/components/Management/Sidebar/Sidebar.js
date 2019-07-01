import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
class sidebar extends Component {
  state = {
    membersOpen:false,
    postsOpen:false,
    videosOpen:false,
    managementOpen:false
  };

  membersHandler=()=>{
    this.setState({
        membersOpen: !this.state.membersOpen
        
      })
  }
  postsHandler=()=>{
    this.setState({
        postsOpen: !this.state.postsOpen
        
      })
  }

  videosHandler=()=>{
    this.setState({
        videosOpen: !this.state.videosOpen
        
      })
  }
  managementHandler=()=>{
    this.setState({
      managementOpen: !this.state.managementOpen
      
    })
  }
  render() {
    return (
      <div>
        <nav className="mana-sidebar">
            <div className="mana-profile">
                <p>Welcome, placeHolder</p>
                <p style={{borderBottom:"1px solid white"}}><i class="icofont-power"></i>Log out</p>
            </div>
          <ul>
              <li>
                  <NavLink className="mana-nav-link" to="/management">
                      <p>Home</p>
                  </NavLink>
              </li>

              <li>
              <a
                onClick={this.videosHandler}
                data-toggle="collapse"
              >
                <p>Videos<i class="icofont-hand-drawn-down" style={{marginLeft:"10px"}}></i></p>
                
              </a>
              <Collapse in={this.state.videosOpen}>
                <div>
                  <ul className="nav mana-nav list-group">
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/yoga"><p>Yoga</p></NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/cardio"><p>Cardio</p></NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/weight"><p>Weight Training</p></NavLink>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>

            <li>
              <a
                onClick={this.managementHandler}
                data-toggle="collapse"
              >
                <p>Management<i class="icofont-hand-drawn-down" style={{marginLeft:"10px"}}></i></p>
                
              </a>
              <Collapse in={this.state.managementOpen}>
                <div>
                  <ul className="nav mana-nav list-group">
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/members"><p>View Management</p></NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/addMember"><p>Add An Admin</p></NavLink>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>

              <li>
              <a
                onClick={this.membersHandler}
                data-toggle="collapse"
              >
                <p>Members<i class="icofont-hand-drawn-down" style={{marginLeft:"10px"}}></i></p>
                
              </a>
              <Collapse in={this.state.membersOpen}>
                <div>
                  <ul className="nav mana-nav list-group">
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/members"><p>View Members</p></NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/addMember"><p>Add A Member</p></NavLink>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>

            <li>
              <a
                onClick={this.postsHandler}
                data-toggle="collapse"
              >
                <p>Member Post<i class="icofont-hand-drawn-down" style={{marginLeft:"10px"}}></i></p>
                
              </a>
              <Collapse in={this.state.postsOpen}>
                <div>
                  <ul className="nav mana-nav list-group">
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/posts"><p>View Posts</p></NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management.addPost"><p>Add A Post</p></NavLink>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default sidebar;
