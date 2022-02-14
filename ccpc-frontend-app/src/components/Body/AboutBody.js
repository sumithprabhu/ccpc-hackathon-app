import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./AboutBody.module.css";
import aboutPageImage from "../../assets/aboutpageImage.jpg";
import Footer from "../Footer/Footer";
import BodyContent from "../../UI/BodyContent";

const AboutBody = () => {
  return (
    <div>
      <Navbar inAbout={true} />

      <BodyContent
        image={aboutPageImage}
        headline="Who are we?"
        description="That feels like an existential question, don't you think?."
      />
      <Footer />
    </div>
  );
};

export default AboutBody;
