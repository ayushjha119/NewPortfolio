import React from "react";
// import ejs from "../../assets/ejs.png";
import { Icon } from "@iconify/react";
const Backend = () => {
  return (
    <div className="skills__content">
      <span className="border"></span>
      <span className="border"></span>
      <span className="border"></span>
      <span className="border"></span>
      <h3 className="skills__title">Backend </h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-nodejs"></i>
            <div>
              <h3 className="skills___name">Node JS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <Icon icon="skill-icons:expressjs-light" width="25" height="25" />

            <div>
              <h3 className="skills___name">Express JS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-mongodb"></i>
            <div>
              <h3 className="skills___name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <Icon icon="logos:firebase" width="25" height="25" />
            <div>
              <h3 className="skills___name">Firebase</h3>
              <span className="skills__level">Basics</span>
            </div>
          </div>
          <div className="skills__data">
            <svg
              class="vercel"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M24 22.525H0l12-21.05 12 21.05z"></path>
            </svg>

            <div>
              <h3 className="skills___name">Vercel</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <Icon icon="logos:redis" width="25" height="25" />
            <div>
              <h3 className="skills___name">Redis</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <Icon icon="logos:postgresql" width="25" height="25" />
            <div>
              <h3 className="skills___name">PostgreSQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            {/* <i class="bx bxl-docker"></i> */}
            <Icon icon="devicon:docker" width="32" height="32" />

            <div>
              <h3 className="skills___name">Docker</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <Icon icon="skill-icons:kubernetes" width="25" height="25" />

            <div>
              <h3 className="skills___name">Kubernetes</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <Icon icon="skill-icons:golang" width="25" height="25" />

            <div>
              <h3 className="skills___name">Go</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
