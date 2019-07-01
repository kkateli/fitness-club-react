import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
class sidebar extends Component {
  state = {
    membersOpen:false,
    postsOpen:false,
    videosOpen:false
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
  render() {
    return (
      <div>
        <nav className="mana-sidebar">
            <div>
                <p>Welcome, placeHolder</p>
                <p style={{borderBottom:"1px solid white"}}><i class="icofont-power"></i>Log out</p>
            </div>
          <ul>
              <li>
                  <a>
                      <p>Home</p>
                  </a>
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
                      <NavLink className="mana-nav-link" to="#"><p>Yoga</p></NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="#"><p>Cardio</p></NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="#"><p>Weight Training</p></NavLink>
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
                      <NavLink className="mana-nav-link" to="#"><p>View Members</p></NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="#"><p>Add A Member</p></NavLink>
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
                      <NavLink className="mana-nav-link" to="#"><p>View Posts</p></NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="#"><p>Add A Post</p></NavLink>
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
