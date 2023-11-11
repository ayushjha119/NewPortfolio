import React from "react";
import "./scrollup.css";

const Scrollup = () => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (window.scrollY >= 1700) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="" className="scrollup" onClick={scrollUp}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
