import React, { FC } from "react";
import Navigation from "../navigation";
import "./layout.css";
import Footer from "../footer";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-name-container">
        <a href="#home_section">
          <h1 className="layout-name">Gabs</h1>
        </a>
      </div>

      {children}
      <Navigation />
      <Footer />
    </div>
  );
};
export default Layout;
