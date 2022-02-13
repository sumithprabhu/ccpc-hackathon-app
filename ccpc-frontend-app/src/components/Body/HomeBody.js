import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./HomeBody.module.css";
import picHead from "../../assets/testimg2.jpg";
import { CardList } from "../Card/cardList";
import Footer from "../Footer/Footer";

const HomeBody = () => {
  return (
    <div>
      <Navbar inHome={true}/>
      <div className={classes.mainbody}>
        <div className={classes.mainimage}>
          <img src={picHead} alt="...."  />
          {/* <Slideshow /> */}
        </div>
        <div className={classes.textbody}>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </div>
        <CardList/>
      <Footer/>
      </div>
    </div>
  );
};

export default HomeBody;
