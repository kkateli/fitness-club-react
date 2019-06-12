import cssClasses from "./Modal.module.css";
import React, { Component } from "react";
class Modal extends Component {
  
  
  render() {
    return <div className={cssClasses.Modal}>{this.props.children}</div>;
  }
}
export default Modal;
