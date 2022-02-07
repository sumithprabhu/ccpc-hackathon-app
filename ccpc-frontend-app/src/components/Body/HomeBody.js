import React from "react";
import Navbar from "../Navbar/Navbar";
import TargetLink from "../../UI/TargetLink";
import classes from "./HomeBody.module.css";
import picHead from "../../assets/contentImage2.jpg";

const HomeBody = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.mainbody}>
        <div className={classes.mainimage}>
          <img src={picHead} alt="...."  />
        </div>
        <div className={classes.textbody}>
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
