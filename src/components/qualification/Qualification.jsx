import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [pageY, setPageY] = useState(false);
  window.addEventListener("scroll", function () {
    if (
      window.scrollY >= 2300 &&
      window.scrollY <= 3800 &&
      this.window.innerWidth > 992
    ) {
      setPageY(true);
    } else if (
      window.scrollY >= 2800 &&
      window.scrollY <= 4000 &&
      this.window.innerWidth < 992 &&
      this.window.innerWidth > 768
    ) {
      setPageY(true);
    } else if (
      window.scrollY >= 2950 &&
      window.scrollY <= 4200 &&
      this.window.innerWidth <= 768 &&
      this.window.innerWidth > 600
    ) {
      setPageY(true);
    } else if (
      window.scrollY >= 4500 &&
      window.scrollY <= 5700 &&
      this.window.innerWidth <= 600 &&
      this.window.innerWidth > 576
    ) {
      setPageY(true);
    } else if (
      window.scrollY >= 4330 &&
      window.scrollY <= 5600 &&
      this.window.innerWidth <= 576 &&
      this.window.innerWidth > 480
    ) {
      setPageY(true);
    } else if (
      window.scrollY >= 4050 &&
      window.scrollY <= 5300 &&
      this.window.innerWidth <= 480 &&
      this.window.innerWidth > 350
    ) {
      setPageY(true);
    } else if (
      window.scrollY >= 4100 &&
      window.scrollY <= 5250 &&
      this.window.innerWidth < 350
    ) {
      setPageY(true);
    } else setPageY(false);
  });

  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  Heritage Institute Of Technology
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>
              <div>
                <span
                  className={
                    pageY === true
                      ? "qualification__rounder qualification__rounder1"
                      : "qualification__rounder"
                  }
                ></span>
                <span
                  className={
                    pageY === true
                      ? "qualification__line qualification__line1"
                      : "qualification__line"
                  }
                ></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span
                  className={
                    pageY === true
                      ? "qualification__rounder qualification__rounder2"
                      : "qualification__rounder"
                  }
                ></span>
                <span
                  className={
                    pageY === true
                      ? "qualification__line qualification__line2"
                      : "qualification__line"
                  }
                ></span>
              </div>
            </div> */}

            <div className="qualification__data">
              <div></div>
              <div>
                <span
                  className={
                    pageY === true
                      ? "qualification__rounder qualification__rounder4"
                      : "qualification__rounder"
                  }
                ></span>
                <span
                  className={
                    pageY === true
                      ? "qualification__line qualification__line4"
                      : "qualification__line"
                  }
                ></span>
              </div>
              <div>
                <h3 className="qualification__title">12th</h3>
                <span className="qualification__subtitle">
                  HARROW ENGLISH SCHOOL
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017
                  <div>CBSE</div>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th</h3>
                <span className="qualification__subtitle">
                  HARROW ENGLISH SCHOOL
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2015
                  <div>CBSE</div>
                </div>
              </div>
              <div>
                <span
                  className={
                    pageY === true
                      ? "qualification__rounder qualification__rounder5"
                      : "qualification__rounder"
                  }
                ></span>
                <span
                  className={
                    pageY === true
                      ? "qualification__line qualification__line5"
                      : "qualification__line"
                  }
                ></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developer intern</h3>
                <span className="qualification__subtitle">WORK BINDER</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2021 - Oct 2021
                </div>
              </div>
              <div>
                <span
                  className={
                    pageY === true
                      ? "qualification__rounder qualification__rounder1"
                      : "qualification__rounder"
                  }
                ></span>
                <span
                  className={
                    pageY === true
                      ? "qualification__line qualification__line1"
                      : "qualification__line"
                  }
                ></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span
                  className={
                    pageY === true
                      ? "qualification__rounder qualification__rounder4"
                      : "qualification__rounder"
                  }
                ></span>
                <span
                  className={
                    pageY === true
                      ? "qualification__line qualification__line4"
                      : "qualification__line"
                  }
                ></span>
              </div>
              <div>
                <h3 className="qualification__title">QA Expert</h3>
                <span className="qualification__subtitle">CHEGG</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2020 - Oct 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
