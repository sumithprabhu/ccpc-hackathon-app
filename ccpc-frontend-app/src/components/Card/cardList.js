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
        link="/internship"
      />
      <Card
        key="em2"
        details="Career"
        descrip="Page redirect to /career"
        image={career}
        link="/home"
      />
      <Card
        key="em3"
        details="Assistance"
        descrip="Page redirect to /assistance"
        image={assistance}
        link="/internship"
      />
      <Card
        key="em4"
        details="Training"
        descrip="Page redirect to /training"
        image={training}
        link="/internship"
      />
    </div>
  );
};
