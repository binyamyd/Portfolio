import React from "react";
import classes from "./Work.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
          <p>
            Welocome to my web development porfolio! Explore a collection of
            projects showcasing my expertise in front-end development.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Work;
