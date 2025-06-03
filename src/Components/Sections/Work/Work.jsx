import React from "react";
import classes from "./Work.module.css";

function Work() {
  return (
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
  );
}

export default Work;
