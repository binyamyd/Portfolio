import React from "react";
import classes from "./About.module.css";
import hi from "../../../assets/ring light.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  const skills = [
    "HTML5",
    "JavaScript",
    "CSS",
    "Github",
    "Tailwind CSS",
    "Node.js",
    "React.js",
    "Express.js",
    "Vite",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);
  return (
    <div data-aos="fade-up">
      <section id="about" className={classes.about_section}>
        <div className={classes.about_wrapper}>
          <div className={classes.about_content}>
            <h1>About Me</h1>

            <p>
              My name is Binyam Yirmed, a Full Stack Developer who builds
              responsive and dynamic web apps. I'm a passionate frontend
              developer with a strong foundation in JavaScript and React. I
              enjoy building user-centric applications with a focus on
              performance, responsiveness, and design. I'm currently focused on
              expanding my knowledge in state management and testing with tools
              like Redux and React Testing Library.
            </p>
          </div>
          <div className={classes.image_container}>
            <img src={hi} alt="hi" className={classes.image} />
          </div>
        </div>
        <div className={classes.skills_section}>
          <h1>Skills</h1>
          <div className={classes.skills_wrapper}>
            <div className={classes.skill_row}>
              <div className={classes.skill_track}>
                {[...skills, ...skills].map((skill, i) => (
                  <a key={i} href="#">
                    {skill}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
