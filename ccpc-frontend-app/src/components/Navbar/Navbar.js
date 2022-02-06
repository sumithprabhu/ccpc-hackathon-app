import React from "react";
import classes from "./Navbar.module.css";
import TargetLink from "../../UI/TargetLink";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <TargetLink toPath="/" name="CCPC"></TargetLink>
        </h1>
        <NavLinks/>
      </header>
    </div>
  );
};

export default Navbar;
