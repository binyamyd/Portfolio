import React from "react";
import "./Header.css";
import { MdArrowOutward } from "react-icons/md";
import { CiDark } from "react-icons/ci";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <button onClick={() => scrollToSection("home")} className="header__link">
        <h3>Binyam</h3>
      </button>
      <nav className="header__nav">
        <button
          onClick={() => scrollToSection("home")}
          className="header__link"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="header__link"
        >
          About me
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className="header__link"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection("work")}
          className="header__link"
        >
          My Work
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="header__link"
        >
          Contact me
        </button>
      </nav>

      <div className="mode_contact">
        <button className="dark_mode">
          {" "}
          <CiDark size={30} />
        </button>

        <button className="contact_button">
          Contact{" "}
          <div className="">
            <MdArrowOutward size={20} />
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
