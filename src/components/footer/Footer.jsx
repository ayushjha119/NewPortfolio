import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ayush Jha</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/ayushjha119"
            className="footer__social-link github"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-jha11/"
            className="footer__social-link linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/ayush_j.h.a_/"
            className="footer__social-link instagram"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
        <span className="footer__copy">
          Created By <a href="/#">Ayush Jha</a> &copy; | 2023 All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
