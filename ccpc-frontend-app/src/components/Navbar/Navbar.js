import React from "react";
import classes from "./Navbar.module.css";
import TargetLink from "../../UI/TargetLink";
import NavLinks from "./NavLinks";
import logo from "../../assets/logo3.jpeg";

const Navbar = (props) => {
  return (
    <div>
      <header className={classes.header}>
        {/* <img src={logo} alt="Logo" className={classes.imgLogo}></img> */}
        <h1 className={classes.logo}>CCPC</h1>
        <NavLinks
          inInternship={props.inInternship || false}
          inAbout={props.inAbout || false}
          inHome={props.inHome || false}
        />
      </header>
    </div>
  );
};

export default Navbar;
