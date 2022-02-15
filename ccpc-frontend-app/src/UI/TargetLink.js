import React from "react";
import { Link } from "react-router-dom";

const TargetLink = (props) => {
  return (
    <div>
      <Link to={props.toPath}>{props.name}</Link>

    </div>
  );
};

export default TargetLink;
