import React, { FC, useState } from "react";
import "./navigation.css";
import { useTranslation } from "react-i18next";

export const Navigation: FC = () => {
  const { t, i18n } = useTranslation("global");
  const [open, setOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="navigation-container" onClick={() => setOpen(!open)}>
        <button className={`navigation-button ${open ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ul className={`navigation-menu ${open ? "open" : ""}`}>
        <li onClick={() => setOpen(!open)}>
          <a href="#home_section">{t("Home")}</a>
        </li>
        <li onClick={() => setOpen(!open)}>
          <a href="#about_section"> {t("About")}</a>
        </li>
        <li onClick={() => setOpen(!open)}>
          <a href="#projects_section">{t("Projects")}</a>
        </li>
        <li onClick={() => setOpen(!open)}>
          <a href="#contact_section"> {t("Contact")}</a>
        </li>
        <li onClick={() => setOpen(!open)}>
          <a href="/Gabriela Quintanilla.pdf" download>
            {t("Download CV")}
          </a>
        </li>
        <li>
          <button onClick={() => i18n.changeLanguage("en")}>English</button>
          <button onClick={() => i18n.changeLanguage("es")}>Español</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
