import React, { FC } from "react";
import "./project.css";
import Cat1 from "../../icons/cats-1.jpg";
import Cat2 from "../../icons/cats-2.jpg";
import Cat3 from "../../icons/cats-4.jpg";
import Flower2 from "../../icons/flower-2.svg";
import Flower3 from "../../icons/flower-3.svg";
import Flower5 from "../../icons/flower-5.svg";
import { Flower1 } from "../../icons/flower-1";

export const Projects: FC = () => {
  const projects = [
    {
      name: "Gabs' coffe shop",
      description: "From really sweet to bitter espresso, you choose!",
      tech: "React, TypeScript, Redux, Firebase, Stripe",
      live: "https://coffee-shop-gabscs.onrender.com/",
      github: "https://github.com/gabyquin14/coffee-shop",
      image: Cat1,
      flowerImage: Flower2,
    },
    {
      name: "Weather today",
      description: "Learn what's the current weather in your city!",
      tech: "Vue, TypeScript, Pinia",
      live: "https://gabs-weather-app.onrender.com/",
      github: "https://github.com/gabyquin14/weather-app",
      image: Cat2,
      flowerImage: Flower3,
    },
    {
      name: "Favorite Pokemons",
      description: "Choose your favorite pokemon and see their stats and more!",
      tech: "React, Firebase, SCSS",
      live: "https://gabs-favorite-pokemons.netlify.app/",
      github: "https://github.com/gabyquin14/pokeApiDisplay",
      image: Cat3,
      flowerImage: Flower5,
      flowerImage2: Flower1,
    },
  ];

  return (
    <section className="projects" id="projects_section">
      {projects.map((project, id) => (
        <div
          className={`section projects-container direction-${id + 1}`}
          key={id}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="main-img-container"
          >
            <img className="main-img" src={project.image} alt="cat" />
          </a>
          <img
            className={`flower-img img-${id + 1}`}
            src={project.flowerImage}
            alt="flower"
          />
          {project.flowerImage2 && (
            <Flower1 className={`flower-img img-${id + 2}`} />
          )}
          <div className={`projects-info direction-${id + 1}`}>
            <div className={`project-num direction-${id + 1}`}>
              <hr />
              <span>{`0${id + 1}`}</span>
            </div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <h3 className="projects-tech">{project.tech}</h3>
            <div className="projects-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                View Live
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Projects;
