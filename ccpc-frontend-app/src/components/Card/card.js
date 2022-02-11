import React from "react";

import classes from "../Card/card.module.css";


export const Card = (props) => {
  return (
    <div className={classes.cardcontainer}>
      <img
        src={props.image}
        alt=""
      />
      <h1>{props.details}</h1>
      <p>{props.descrip}</p>
    </div>
  );
};
