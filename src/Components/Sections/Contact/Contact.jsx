import React from "react";
import classes from "./Contact.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="contact" className={classes.container} data-aos="fade-up">
      <div className={classes.container_wrapper}>
        <div className={classes.info_container}>
          <h4>Connect with me</h4>
          <h1>Get in touch</h1>
          <p>
            I'd love to hear from you! If you have any questions. comments, or
            feedback, please use the form below.
          </p>
        </div>

        <div className={classes.form_wrapper}>
          <form action="" className={classes.form_container}>
            <div className={classes.name_email}>
              <input
                type="name"
                placeholder="Enter your name"
                className={classes.form}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className={classes.form}
              />
            </div>
            <div className={classes.message_wrapper}>
              <textarea
                type="message"
                placeholder="Message"
                name=""
                id=""
                className={classes.form_message}
              />
            </div>
          </form>
        </div>
        <div className={classes.submit}>
          <button className={classes.submit_button}>
            Submit now{" "}
            <div className={classes.submit_arrow}>
              <FaArrowRightLong />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
