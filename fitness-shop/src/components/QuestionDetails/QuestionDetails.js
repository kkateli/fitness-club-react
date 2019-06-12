import React from "react";
const questionDetails = (props)=>{
    return(
        <div>
        <h3>{props.qTitle}</h3>
        <p>{props.qContent}</p>
       
      
       <button className="btn btn-primary" onClick={props.confirm}>Confirm</button>
       <button className="btn btn-primary" onClick = {props.cancel}>Cancel</button>
       </div>

    )
}
export default questionDetails;