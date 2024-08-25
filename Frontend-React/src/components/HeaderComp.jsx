import React, { useEffect, useState } from "react";

import "../styles/Components/HeaderComp.css"

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

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <nav>
        <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            
        </div>

        <div className="logo">
            {/* Adicionar minha logo */}
            <a href=""><FaCircleHalfStroke /> </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;