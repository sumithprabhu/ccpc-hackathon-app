import React from "react";
import TargetLink from "../../UI/TargetLink";
import Navbar from "../Navbar/Navbar";
import classes from './AboutBody.module.css'

const AboutBody = () => {
  return (
    <div>
      <Navbar />

      <div className={classes.aboutbody}>
        <>
          <main>
            <h2>Who are we?</h2>
            <p>That feels like an existential question, don't you think?</p>
          </main>
          <nav>
            <TargetLink toPath="/" name="Home"></TargetLink>
          </nav>
        </>
      </div>
    </div>
  );
};

export default AboutBody;
