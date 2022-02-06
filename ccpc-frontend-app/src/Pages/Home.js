import React from "react";
import TargetLink from "../UI/TargetLink";


const Home = () => {
  return (
    <div>
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <TargetLink toPath="/about" name="About"></TargetLink>
        </nav>
      </>
    </div>
  );
};

export default Home;
