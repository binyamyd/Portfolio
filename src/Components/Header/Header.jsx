import React, { useState } from "react";
import "./Header.css";
import { MdArrowOutward } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi"; // humburger icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); //close menu sfter navigating
    }
  };

  return (
    <header className="header">
      <button onClick={() => scrollToSection("home")} className="header__link">
        <h3>Binyam</h3>
      </button>

      {/* Mobile Menu Toggle */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
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
      <div className="social_links">
        <a href="https://github.com/binyamyd/">
          <FaGithub size={20} className="icon" />
        </a>
        <a href="https://x.com/Binyam_YD">
          <FaSquareXTwitter size={20} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/binyam-yirmed-b36914242/">
          <FaLinkedin size={20} className="icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
