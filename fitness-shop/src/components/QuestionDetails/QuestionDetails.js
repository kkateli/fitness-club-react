import React from "react";
import cssclasses from "./QuestionDetails.module.css";
const questionDetails = (props)=>{
    return(
        <div className={cssclasses.details}>
        <h3>{props.qTitle}</h3>
        <p>{props.qContent}</p>
       
      
      
       <button className="btn btn-primary" onClick = {props.cancel}>Cancel</button>
       </div>

    )
}
export default questionDetails;