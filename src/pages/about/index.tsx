import React, { FC } from "react";
import "./about.css";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass } from "react-icons/di";
import leaf from "../../icons/leaf-1.svg";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiSvelte,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

export const About: FC = () => {
  return (
    <section className="about">
      <img className="leaf" src={leaf} alt="leaf" />
      <div className="about-container">
        <div className="about-info">
          <h1>About me 💕</h1>
          <p>
            Hello again! Thanks for scrolling this far!! 🤗 I enjoy creating
            things that live on the internet. My main focus these days is
            building accessible, inclusive products and digital experiences.
          </p>
          <br />
          <p>
            Other than coding, I spend most of my free time playing Stardew
            Valley or any other video games. 🤓 I've also been reading more so
            feel free to reach out to me with any book recommendations
            (especially fantasy). I also love to crochet hats!
          </p>
        </div>

        <div className="about-toolkit">
          <h1>My Toolkit 🌸</h1>
          <ul>
            <li>
              <AiFillHtml5 />
              <h3>HTML5</h3>
            </li>
            <li>
              <DiCss3 />
              <h3>CSS3</h3>
            </li>
            <li>
              <SiTypescript />
              <h3>TypeSript</h3>
            </li>
            <li>
              <SiJavascript />
              <h3>Javascript</h3>
            </li>
            <li>
              <DiSass />
              <h3>SASS</h3>
            </li>
            <li>
              <SiReact />
              <h3>React</h3>
            </li>
            <li>
              <FaVuejs />
              <h3>Vue</h3>
            </li>
            <li>
              <AiFillGithub />
              <h3>Github</h3>
            </li>
            <li>
              <SiFirebase />
              <h3>Firebase</h3>
            </li>
            <li>
              <SiSvelte />
              <h3>Svelte</h3>
            </li>
          </ul>
        </div>
      </div>
      <img className="leaf-2" src={leaf} alt="leaf-2" />
    </section>
  );
};
export default About;
