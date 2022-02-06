import React from "react";
import { Link } from "react-router-dom";


const TargetLink = (props) => {
  return (
    <div >
      <span>
        <Link to={props.toPath}>{props.name}</Link>
      </span>
    </div>
  );
};

export default TargetLink;
