import Portfolio from "./Portfolio";
import Dbus from "../../assets/Dbus.png";
import Gym from "../../assets/Gym.png";
import GeeksBlogging from "../../assets/GeeksBlogging.png";
//import quizHub from "../../assets/quizhub.png";
import oldPortfolio from "../../assets/portfolioOld.png";
import newPortfolio from "../../assets/portfolioNew.png";
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
    id: 3,
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
    id: 4,
    title: "Old Portfolio",
    description: "My old portfolio website",
    links: {
      github: "https://github.com/ayushjha119/Portfolio2.0",
      live: "https://portfolio-29997.web.app/",
    },
    image: oldPortfolio,
  },
  {
    id: 5,
    title: "New Portfolio",
    description: "My new portfolio website built using React",
    links: {
      github: "https://github.com/ayushjha119/NewPortfolio",
      live: "https://ayushjha.tech/",
    },
    image: newPortfolio,
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
