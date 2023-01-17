import React, { FC } from "react";
import Home from "./pages/home/Index";
import Layout from "./components/layout";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export const App: FC = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
};
export default App;
