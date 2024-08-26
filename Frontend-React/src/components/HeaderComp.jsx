import React, { useEffect, useState } from "react";
import "../styles/Components/HeaderComp.css";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { useTheme } from "../javascript/themeContext.jsx"; 

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = -70; 
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <nav>
        <div  >
          <a className={`link ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={() => handleScrollToSection("about")}>About</a>
          <a className={`link ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={() => handleScrollToSection("skills")}>Skills</a>
          <a className={`link ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={() => handleScrollToSection("projects")}>Projects</a>
          <a className={`link ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onClick={() => handleScrollToSection("contact")}>Contact</a>
        </div>
        <div className="logo">
          <button onClick={toggleTheme} className="theme-toggle-button">
            <FaCircleHalfStroke />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
