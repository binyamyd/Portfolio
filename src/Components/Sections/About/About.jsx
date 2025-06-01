import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={classes.about_section}>
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Detailed information about your background, skills, and experience
        </p>
        {/* Add more content */}
      </div>
    </section>
  );
};
export default About;
