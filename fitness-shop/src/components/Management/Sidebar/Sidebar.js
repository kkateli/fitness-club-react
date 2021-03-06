import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
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
                <p>Welcome, {this.props.email.split("@")[0].split("/")[1]}</p>
                <Link to={"/logout"}><p style={{borderBottom:"1px solid white"}}><i className="icofont-power"></i>Log out</p></Link>
            </div>
          <ul>
              <li>
                  <NavLink className="mana-nav-link" to="/management">
                      <p>Home</p>
                  </NavLink>
              </li>
            <li>
              <a
                onClick={this.managementHandler}
                data-toggle="collapse"
              >
                <p>Management<i className="icofont-hand-drawn-down" style={{marginLeft:"10px"}}></i></p>
                
              </a>
              <Collapse in={this.state.managementOpen}>
                <div>
                  <ul className="nav mana-nav list-group">
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/admins"><p>View Management</p></NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/addadmin"><p>Add An Admin</p></NavLink>
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
                <p>Members<i className="icofont-hand-drawn-down" style={{marginLeft:"10px"}}></i></p>
                
              </a>
              <Collapse in={this.state.membersOpen}>
                <div>
                  <ul className="nav mana-nav list-group">
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/members"><p>View Members</p></NavLink>
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
                <p>Member Post<i className="icofont-hand-drawn-down" style={{marginLeft:"10px"}}></i></p>
                
              </a>
              <Collapse in={this.state.postsOpen}>
                <div>
                  <ul className="nav mana-nav list-group">
                    <li className="list-group-item">
                      <NavLink className="mana-nav-link" to="/management/posts"><p>View Posts</p></NavLink>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>

            <li>
              <a
                onClick={this.videosHandler}
                data-toggle="collapse"
              >
                <p>Videos<i className="icofont-hand-drawn-down" style={{marginLeft:"10px"}}></i></p>
                
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
          </ul>
        </nav>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    email:state.auth.userEmail
  }

}
export default connect(mapStateToProps,null)(sidebar);
