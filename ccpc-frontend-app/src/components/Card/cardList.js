import React from "react";
import { Card } from "./card";
import classes from "../Card/cardList.module.css";

export const CardList = (props) => {
  return (
    <div className={classes.cardlist}>
      <Card key="em1" details="Internship" descrip="Page redirect to /internship"/>
      <Card key="em1" details="Internship" descrip="Page redirect to /internship"/>
      <Card key="em1" details="Internship" descrip="Page redirect to /internship"/>
      <Card key="em1" details="Internship" descrip="Page redirect to /internship"/>
    </div>
  );
};
