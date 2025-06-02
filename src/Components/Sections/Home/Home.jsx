import React from "react";
import classes from "../Home/Home.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import profile from "../../../assets/CT6A4693.JPG";
import Type from "./Type";

function Home() {
  return (
    <section id="home" className={classes.wrapper}>
      {/* Profile image and greetings */}
      <div className={classes.container}>
        <div className={classes.profile_wrapper}>
          <img src={profile} alt="profile" className={classes.profile_image} />
          <div className={classes.greeting}>
            <h1>
              Hi! I'm Binyam Yirmed{" "}
              <span className={classes.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
          </div>
        </div>

        {/* Typewriter effect with skills */}
        <div className={classes.title}>
          <Type />
        </div>

        {/*Description*/}
        <p className={classes.description}>
          I am a computer science graduate with frontend web development skill.
          I have more than 2 years of experience, and I love solving challenges
          and making ideas come to life.
        </p>
        <div className={classes.button_container}>
          <div className={classes.contact_me}>
            <button className={classes.contact_button}>
              Contact me{" "}
              <div>
                <FaArrowRightLong />
              </div>
            </button>{" "}
          </div>
          <button className={classes.contact_button}>
            My resume{" "}
            <div>
              <MdOutlineFileDownload />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
