import React from "react";
import "./Backdrop.css";
const backdrop =(prop)=>{
    return(
        <div className ="Backdrop" onClick={prop.backdropClicked}>

        </div>
    )

}
export default backdrop;
