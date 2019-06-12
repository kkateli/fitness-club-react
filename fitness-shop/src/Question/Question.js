import React from "react";

import "./Question.css";

const question = props => {
  return (
    <div className='question'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title searchTitle" >{props.title}</h5>
          <p className="card-text searchContent">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};
export default question;
