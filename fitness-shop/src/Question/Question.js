import React from "react";
import cssClasses from "./Question.module.css";
const question = (props)=>{
    return(
        <div className={cssClasses.question}>
            <div className={cssClasses.title}>Question Title</div>
            <div className={cssClasses.content}>Content</div>
        </div>

    )

}
export default question;