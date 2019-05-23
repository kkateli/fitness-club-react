import React, {Component}from "react";
import "./LoaderTwo.css";
class loaderTwo extends Component {
  render(){
    
    return (
      <div className="screen-loader">
        <div className="loader-background">
          <div id="app" className="loader" />
        </div>
      </div>
    );
  }
  
};
export default loaderTwo;
