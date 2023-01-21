import React, { FC } from "react";
import { Flower1 } from "../../icons/flower-1";
import Flower2 from "../../icons/flower-4.svg";
import Flower3 from "../../icons/flower-2.svg";
import { FaChevronDown } from "react-icons/fa";
import "./home.css";
import { useTranslation } from "react-i18next";

const Home: FC = () => {
  const { t } = useTranslation("global");
  return (
    <section className="section home-container" id="home_section">
      <Flower1 className="flower-1" />
      <img className="flower-2" src={Flower2} alt="" />
      <img className="flower-3" src={Flower3} alt="" />
      <h1 className="home-title">
        {t("Hello")}
        <span>{t("Im Gabriela")} </span>
      </h1>
      <p className="home-description">{t("Im a front-end developer")}</p>
      <div className="home-scroll-container">
        <FaChevronDown />
      </div>
    </section>
  );
};
export default Home;
