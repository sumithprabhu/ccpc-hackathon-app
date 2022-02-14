import React from "react";
import classes from "./Footer.module.css";
import TargetLink from "../../UI/TargetLink";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes["footer-col"]}>
            <h4>Our Features</h4>
            <ul>
              <li>
                <TargetLink toPath="/about" name="About"></TargetLink>
              </li>
              <li>
                <TargetLink toPath="/internship" name="Internship"></TargetLink>
              </li>
              <li>
                <TargetLink toPath="/training" name="Training"></TargetLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
