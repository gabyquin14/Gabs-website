import React, { FC, useEffect } from "react";
import Home from "./pages/home/Index";
import Layout from "./components/layout";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export const App: FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const appearOptions = {
      threshold: 0.5,
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          else {
            entry.target.classList.add("show");
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions
    );
    sections.forEach((section) => {
      appearOnScroll.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        appearOnScroll.unobserve(section);
      });
    };
  }, []);

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
