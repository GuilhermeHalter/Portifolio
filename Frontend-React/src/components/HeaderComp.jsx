import React, { useEffect, useState } from "react";
import "../styles/Components/HeaderComp.css";
import { FaCircleHalfStroke } from "react-icons/fa6";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    const offset = -70; // Ajuste o valor do offset conforme necessário
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
        <div className="nav-links">
          <a onClick={() => handleScrollToSection("about")}>About</a>
          <a onClick={() => handleScrollToSection("skills")}>Skills</a>
          <a onClick={() => handleScrollToSection("projects")}>Projects</a>
          <a onClick={() => handleScrollToSection("contact")}>Contact</a>
        </div>
        <div className="logo">
          <a href="#"><FaCircleHalfStroke /></a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
