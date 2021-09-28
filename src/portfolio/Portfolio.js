import React from "react";
import NavbarSection from "../home/NavbarSection";
import Reveal from "react-reveal/Reveal";
import PageInfo from "./PageInfo";
import Project from "./Project";
import Footer from "../footer/Footer";

function Portfolio() {
  return (
    <>
      <Reveal effect="animNav">
        <NavbarSection />
      </Reveal>
      <Reveal effect="fadeInUp">
        <PageInfo />
      </Reveal>
      <Reveal effect="portfolioAnim">
        <Project />
      </Reveal>
      <Footer />
    </>
  );
}

export default Portfolio;
