import React from "react";
import TargetLink from "../../UI/TargetLink";
import Navbar from "../Navbar/Navbar";
import classes from "./AboutBody.module.css";
import aboutPageImage from "../../assets/aboutpageImage.jpg";
import Footer from '../Footer/Footer'

const AboutBody = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.mainimage}>
          <img src={aboutPageImage} alt="...." />
        </div>

        <div className={classes.textbody}>
          <h2>Who are we?</h2>
          <p>That feels like an existential question, don't you think?</p>
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default AboutBody;
