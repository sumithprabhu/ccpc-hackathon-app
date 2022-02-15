import React from "react";
import Navbar from "../Navbar/Navbar";
import InternshipImage from "../../assets/InternshipImage.jpg";
import classes from "./InternshipBody.module.css";
import BodyContent from "../../UI/BodyContent";
import Footer from '../Footer/Footer'

const InternshipBody = () => {
  return (
    <div>
      <Navbar inInternship={true} />
    
      <BodyContent
        image={InternshipImage}
        headline="An Internship Oppurtunity"
        description="Ara ara Gomen"
      />
      
      <Footer />
    </div>
  );
};

export default InternshipBody;
