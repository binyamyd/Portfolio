import React from "react";
import classes from "../Home/Home.module.css";
import { FaHandsClapping } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDescription, MdOutlineFileDownload } from "react-icons/md";
import profile from "../../../assets/CT6A4693.JPG";
import Type from "./Type";

function Home() {
  return (
    <section id="home" className={classes.wrapper}>
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

        <div className={classes.title}>
          <Type />
        </div>
        <p className={classes.description}>
          I am a frontend developer passionate about bringing ideas to life and
          solving problems with over 2 years of experiance
        </p>
        <div>
          <button>
            Contact me{" "}
            <div>
              <FaArrowRightLong />
            </div>
          </button>{" "}
          <button>
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
