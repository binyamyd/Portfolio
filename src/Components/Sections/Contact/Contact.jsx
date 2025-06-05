import React from "react";
import classes from "./Contact.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formRef.current["user_name"].value;
    const email = formRef.current["user_email"].value;
    const message = formRef.current["message"].value;

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    emailjs
      .sendForm(
        "service_ozgo7eb", // Replace with your service ID
        "template_iwqqxam", // Replace with your template ID
        formRef.current,
        "8nN9ZvUobW3FVGZKE" // Replace with your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  // Simulate success (in real case, send to backend or email service)

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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={classes.form_container}
          >
            <div className={classes.name_email}>
              <input
                name="user_name"
                type="text"
                placeholder="Enter your name"
                className={classes.form}
              />
              <input
                name="user_email"
                type="email"
                placeholder="Enter your email"
                className={classes.form}
              />
            </div>
            <div className={classes.message_wrapper}>
              <textarea
                name="message"
                placeholder="Message"
                className={classes.form_message}
              />
            </div>
            <div className={classes.submit}>
              <button type="submit" className={classes.submit_button}>
                Submit now{" "}
                <div className={classes.submit_arrow}>
                  <FaArrowRightLong />
                </div>
              </button>
            </div>
            {status && (
              <p style={{ textAlign: "center", marginTop: "1rem" }}>{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
