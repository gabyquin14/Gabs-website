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
import { useTranslation } from "react-i18next";

export const About: FC = () => {
  const { t } = useTranslation("global");
  return (
    <section className="section about" id="about_section">
      <img className="leaf" src={leaf} alt="leaf" />
      <div className="about-container">
        <div className="about-info">
          <h1>{t("About me")}</h1>
          <p>{t("Hello again. Thanks for scrolling this far")}</p>
          <br />
          <p>{t("Other than coding")}</p>
        </div>

        <div className="about-toolkit">
          <h1>{t("My Toolkit")}</h1>
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
