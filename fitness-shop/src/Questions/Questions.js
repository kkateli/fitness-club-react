import React, { Component } from "react";
import Question from "../Question/Question";
import cssClasses from "./Questions.module.css";


class Questions extends Component {
  render() {
    return (
      <div>
        <div className="section-title">
          <h2>Questions</h2>

          <form className="w-100 d-none d-md-flex d-lg-flex">
            <container>
            <i class="icofont-search"></i>
            <input type="text" className={cssClasses.searchBar}  placeholder="Search for something..."  /> 
            </container>
         
               
                 
               
             
           
          </form>
          
        </div>
        <Question />
      </div>
    );
  }
}
export default Questions;
