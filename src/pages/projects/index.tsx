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
      name: "urban botany",
      description: "Learn how to properly take care of your houseplants.",
      tech: "React, Firebase, SCSS",
      live: "#",
      github: "#",
      image: Cat1,
      flowerImage: Flower2,
    },
    {
      name: "urban botany",
      description: "Learn how to properly take care of your houseplants.",
      tech: "React, Firebase, SCSS",
      live: "#",
      github: "#",
      image: Cat2,
      flowerImage: Flower3,
    },
    {
      name: "urban botany",
      description: "Learn how to properly take care of your houseplants.",
      tech: "React, Firebase, SCSS",
      live: "#",
      github: "#",
      image: Cat3,
      flowerImage: Flower5,
      flowerImage2: Flower1,
    },
  ];

  return (
    <section className="projects">
      {projects.map((project, id) => (
        <div className={`projects-container direction-${id + 1}`} key={id}>
          <img className="main-img" src={project.image} alt="cat" />
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