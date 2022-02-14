import React from "react";
import { Card } from "./card";
import classes from "../Card/cardList.module.css";
import intern from "../../assets/CardImages/intern.jpg";
import assistance from "../../assets/CardImages/assistance.jpg";
import training from "../../assets/CardImages/training.jpg";
import career from "../../assets/CardImages/career.jpg";

export const CardList = (props) => {
  return (
    <div className={classes.cardlist}>
      <Card
        key="em1"
        details="Internship"
        descrip="Page redirect to /internship"
        image={intern}
      />
      <Card
        key="em1"
        details="Career"
        descrip="Page redirect to /career"
        image={career}
      />
      <Card
        key="em1"
        details="Assistance"
        descrip="Page redirect to /assistance"
        image={assistance}
      />
      <Card
        key="em1"
        details="Training"
        descrip="Page redirect to /training"
        image={training}
      />
    </div>
  );
};
