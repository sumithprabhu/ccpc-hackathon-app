import React from "react";
import classes from "./Navbar.module.css";
import TargetLink from "../../UI/TargetLink";

const Navbar = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <TargetLink toPath="/" name="CCPC"></TargetLink>
        </h1>
        <ul>
          <li>
            <TargetLink toPath="/" name="Home"></TargetLink>
          </li>
          <li>
            <TargetLink toPath="/about" name="About"></TargetLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
