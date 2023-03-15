import React, { useState } from "react";

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
          <nav>
            <a className="about-anchor" 
                href="#about-me"
                    onClick={() => {
                        handlePageChange("About");
                    }}>About</a>
            <a className="portfolio-anchor"
                 href="#portfolio"
                 onClick={() => {
                    handlePageChange("Portfolio");
                 }}>Portfolio</a>
            <a className="contact-anchor"
                 href="#contact"
                    onClick={() => {
                        handlePageChange("Contact")
                    }}>Contact</a>
            <a className="resume-anchor"
                 href="#resume"
                    onClick={() => {
                        handlePageChange("Resume")
                    }}>Resume</a>
          </nav>
      </header>
    )
}

export default Header;