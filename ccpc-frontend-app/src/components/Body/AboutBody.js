import React from "react";
import TargetLink from "../../UI/TargetLink";

const AboutBody = () => {
  return (
    <div>
      <div>
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
