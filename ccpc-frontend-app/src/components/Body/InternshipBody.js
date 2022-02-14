import React from "react";
import Navbar from "../Navbar/Navbar";
import InternshipImage from "../../assets/InternshipImage.jpg";
import classes from "./InternshipBody.module.css";
import BodyContent from "../../UI/BodyContent";

const InternshipBody = () => {
  return (
    <div>
      <Navbar inInternship={true} />
      {/* <div className={classes.mainimage}>
        <img src={InternshipImage} alt="...." />
      </div>
      <div className={classes.textbody}>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </div> */}
      <BodyContent
        image={InternshipImage}
        headline="An Internship Oppurtunity"
        description="Ara ara Gomen"
      />
    </div>
  );
};

export default InternshipBody;
