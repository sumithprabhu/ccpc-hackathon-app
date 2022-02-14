import React from "react";
import classes from "./BodyContent.module.css";

const BodyContent = (props) => {
  return (
    <div>
      <div className={classes.mainimage}>
        <img src={props.image} alt="...." />
      </div>
      <div className={classes.textbody}>
        <h2>{props.headline}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default BodyContent;
