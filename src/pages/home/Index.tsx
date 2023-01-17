import React, { FC } from "react";
import { Flower1 } from "../../icons/flower-1";
import Flower2 from "../../icons/flower-4.svg";
import Flower3 from "../../icons/flower-2.svg";
import { FaChevronDown } from "react-icons/fa";
import "./home.css";
import { useTranslation } from "react-i18next";

const Home: FC = () => {
  const t = useTranslation();
  return (
    <div className="home-container">
      <Flower1 className="flower-1" />
      <img className="flower-2" src={Flower2} alt="" />
      <img className="flower-3" src={Flower3} alt="" />
      <h1 className="home-title">
        Hello!
        <span> I'm Gabriela</span>
      </h1>
      <p className="home-description">
        I'm a front-end developer based in Colombia with a passion for creating
        engaging, entertaining user experiences. ✨
      </p>
      <div className="home-scroll-container">
        <FaChevronDown />
      </div>
    </div>
  );
};
export default Home;
