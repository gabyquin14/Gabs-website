import React, { FC, useState } from "react";
import "./navigation.css";

export const Navigation: FC = () => {
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
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>
          <a href="/Gabriela Quintanilla.pdf" download>
            Download CV 🍂
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
