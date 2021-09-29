import React from "react";
import NavbarSection from "../home/NavbarSection";
import Reveal from "react-reveal/Reveal";
import Footer from "../footer/Footer";
import PageInfo from "./PageInfo";
import Main from "./Main";

function About() {
  return (
    <div>
      <Reveal effect="animNav">
        <NavbarSection />
      </Reveal>
      <Reveal effect="fadeInUp">
        <PageInfo />
      </Reveal>
      <Reveal effect="portfolioAnim">
        <Main />
      </Reveal>
      <Footer />
    </div>
  );
}

export default About;
