import React from "react";
import TargetLink from "../../UI/TargetLink";
import { useNavigate } from "react-router-dom";
import classes from "../Card/card.module.css";

export const Card = (props) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `${props.link}`;
    navigate(path);
  };

  return (
    <div onClick={routeChange} className={classes.cardcontainer}>
      <img src={props.image} alt="" />

      <div className={classes.nametag}>
        <h1>{props.details}</h1>
        {/* <p>{props.descrip}</p> */}
      </div>
    </div>
  );
};
