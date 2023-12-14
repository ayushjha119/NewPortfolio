import Portfolio from "./Portfolio";
import Dbus from "../../assets/Dbus.webp";
import Gym from "../../assets/Gym.webp";
import GeeksBlogging from "../../assets/GeeksBlogging.webp";

import oldPortfolio from "../../assets/portfolioOld.webp";
import newPortfolio from "../../assets/portfolioNew.webp";
import devOverFlow from "../../assets/DevOverFlow.webp";
import "./portfolio.css";

const projects = [
  {
    id: 1,
    title: "GeeksBlogging",
    description: "GeeksBlogging is a multi-user blogging platform for geeks",
    links: {
      github: "https://github.com/ayushjha119/GeeksBloggingapi",
      live: "https://github.com/ayushjha119/GeeksBlogging",
    },
    image: GeeksBlogging,
  },
  {
    id: 2,
    title: "DevOverFlow",
    description:
      "Dev Overflow - A problem solving community for developers like Stack Overflow",
    links: {
      github: "https://github.com/ayushjha119/DevOverflow",
      live: "https://dev-overflow-ayush-jhas-projects.vercel.app/",
    },
    image: devOverFlow,
  },

  {
    id: 3,
    title: "New Portfolio",
    description: "My new portfolio website built using React",
    links: {
      github: "https://github.com/ayushjha119/NewPortfolio",
      live: "https://ayushjha.tech/",
    },
    image: newPortfolio,
  },
  {
    id: 4,
    title: "Exercise Showcase via API",
    description:
      "Explore a variety of exercises categorized by body part using our API-powered website",
    links: {
      github: "https://github.com/ayushjha119/Exercise-Web-App",
      live: "https://ayushjhagym.netlify.app/",
    },
    image: Gym,
  },
  {
    id: 5,
    title: "Digital-Business-website",
    description:
      "A online platform leveraging React for seamless user interactions, designed to enhance digital business experiences",
    links: {
      github: "https://github.com/ayushjha119/Digital-Business-react-website",
      live: "https://digital-business-react-website.vercel.app/",
    },
    image: Dbus,
  },
  //   {
  //     id: 4,
  //     title: "Quiz Hub",
  //     description:
  //       "A quiz web app which gives you feel like Kaun Banega Crorepati",
  //     links: {
  //       github: "https://github.com/sjain-28/Quiz-Hub",
  //       live: "https://quizhub-28.netlify.app",
  //     },
  //     image: quizHub,
  //   },
  {
    id: 6,
    title: "Old Portfolio",
    description: "My old portfolio website",
    links: {
      github: "https://github.com/ayushjha119/Portfolio2.0",
      live: "https://portfolio-29997.web.app/",
    },
    image: oldPortfolio,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Recent works</span>

      <div className="container portfolio__container ">
        {projects.map((item) => (
          <Portfolio key={item.id} project={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
