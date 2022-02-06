import React from "react";
import Navbar from "../Navbar/Navbar";
import TargetLink from "../../UI/TargetLink";
import classes from "./HomeBody.module.css";

const HomeBody = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.mainbody}>
        <div>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </div>
        <nav>
          <TargetLink toPath="/about" name="About"></TargetLink>
        </nav>
      </div>
    </div>
  );
};

export default HomeBody;
