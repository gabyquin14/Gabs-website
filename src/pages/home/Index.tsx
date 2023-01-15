import React, { FC } from "react";
import { Flower1 } from "../../icons/flower-1";
import "./style.css";

const Home: FC = () => {
  return (
    <div className="home-container">
      <Flower1 />
      <h1 className="home-title">
        Hello!
        <span> I'm Gabriela</span>
      </h1>
      <p className="home-description">
        A multidisciplinary developer and designer (sometimes) with a passion
        for creating engaging, entertaining user experiences. ✨
      </p>
    </div>
  );
};
export default Home;
