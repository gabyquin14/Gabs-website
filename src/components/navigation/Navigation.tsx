import React, { FC, useState } from "react";
import "./style.css";

export const Navigation: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navigation-container" onClick={() => setOpen(!open)}>
      <button className={`navigation-button ${open ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};
export default Navigation;
