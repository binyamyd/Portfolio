import React from "react";
import classes from "./Work.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Evangadi from "../../../assets/Evangadi_forum.png";
import Amazon from "../../../assets/Amazon.png";
import Netflix from "../../../assets/Netflix.png";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    id: 1,
    title: "Netflix-Clone",
    image: Netflix, // Replace with your image
    github: "https://github.com/binyamyd/Netflix-Clone-2024",
  },
  {
    id: 2,
    title: "Evangadi-Forum",
    image: Evangadi,
    github: "https://github.com/binyamyd/Evangadi-Forum",
  },
  {
    id: 3,
    title: "Amazone-Clone",
    image: Amazon,
    github: "https://github.com/binyamyd/Amazon-Clone",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
};

function Work() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <div data-aos="fade-up">
      <section id="work" className={classes.container}>
        <div className={classes.info_container}>
          <h4>My portfolio</h4>
          <h1>My latest work</h1>
          <p>Welcome to my web development porfolio!</p>
        </div>

        <div className={classes.projects_grid}>
          {projects.map((project) => (
            <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05}>
              <div
                key={project.id}
                className={classes.project_card}
                data-aos="zoom-in-up"
              >
                <div className={classes.image_container}>
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.button}
                >
                  View on GitHub
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Work;
