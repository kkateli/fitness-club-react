import React, {Component} from "react";
import * as actions from "../../actions/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
class Logout extends Component{
    componentDidMount(){
        this.props.logoutAction();
    }
    render(){
        return(
            <Redirect />

        )
    }
}
const mapDispatchToProps = dispatch => {
    return { logoutAction: () => dispatch(actions.logout()) };
  };
export default connect(null, mapDispatchToProps)(Logout);