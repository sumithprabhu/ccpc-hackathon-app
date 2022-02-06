import React from "react";
import classes from "./Navbar.module.css";
import TargetLink from "../../UI/TargetLink";
import NavLinks from "./NavLinks";
import logo from "../../assets/logo1.jpeg";

const Navbar = () => {
  return (
    <div>
      <header className={classes.header}>
        {/* <h1 className={classes.logo}> */}
        <img
          src={logo}
          alt="Logo"
          className={classes.imgLogo}
        >
          {/* <TargetLink toPath="/" name="CCPC"></TargetLink> */}
        </img>
        {/* </h1> */}
        <NavLinks />
      </header>
    </div>
  );
};

export default Navbar;
