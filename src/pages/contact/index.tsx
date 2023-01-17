import React, { FC } from "react";
import "./contact.css";
import { AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Flower1 from "../../icons/flower-2.svg";
import Flower2 from "../../icons/flower-3.svg";
import Flower3 from "../../icons/flower-5.svg";
import Flower4 from "../../icons/flower-4.svg";

export const Contact: FC = () => {
  return (
    <section className="contact">
      <h1>Let's get in touch!</h1>
      <p>
        If you ever want to grab a coffee/bubble tea (virtually) or just want a
        quick chat - you can find me on the following links!
      </p>
      <div>
        <a
          href="https://github.com/gabyquin14"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a href="mailto:gabyquin14@gmail.com" target="_blank" rel="noreferrer">
          <FiMail />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriela-quintanilla-2a8200211/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <img className="flower flower-1" src={Flower1} alt="flower" />
      <img className="flower flower-2" src={Flower2} alt="flower" />
      <img className="flower flower-3" src={Flower3} alt="flower" />
      <img className="flower flower-4" src={Flower4} alt="flower" />
    </section>
  );
};
export default Contact;
