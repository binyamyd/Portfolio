import React from "react";
import classes from "./About.module.css";
import hi from "../../../assets/ring light.png";

const About = () => {
  return (
    <section id="about" className={classes.about_section}>
      <div className={classes.about_wrapper}>
        <div className={classes.about_content}>
          <h1>About Me</h1>
          <h2>
            My name is Binyam Yirmed, a Frontend Developer who builds responsive
            and dynamic web apps.
          </h2>
          <p>
            I'm a passionate frontend developer with a strong foundation in
            JavaScript and React. I enjoy building user-centric applications
            with a focus on performance, responsiveness, and design. I'm
            currently focused on expanding my knowledge in state management and
            testing with tools like Redux and React Testing Library.
          </p>
        </div>
        <div className={classes.image_container}>
          <img src={hi} alt="hi" className={classes.image} />
        </div>
      </div>
      <div className={classes.skills_section}>
        <h1>Skills</h1>
        <div className={classes.skills_container}>
          <a href="">HTML5</a>
          <a href="">JavaScript</a>
          <a href="">CSS3</a>
          <a href="">React</a>
          <a href="">Redux</a>
        </div>
      </div>
    </section>
  );
};

export default About;
