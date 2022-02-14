import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./HomeBody.module.css";
import picHead from "../../assets/testimg2.jpg";
import { CardList } from "../Card/cardList";
import Footer from "../Footer/Footer";
import BodyContent from "../../UI/BodyContent";

const HomeBody = () => {
  return (
    <div>
      <Navbar inHome={true} />
      <BodyContent
        image={picHead}
        headline="Welcome to the homepage!"
        description="You can do this, I believe in you."
      />
      <CardList />
      <Footer />
    </div>
  );
};

export default HomeBody;
