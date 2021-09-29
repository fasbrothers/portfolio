import React from "react";
import NavbarSection from "./NavbarSection";
import Reveal from "react-reveal/Reveal";
import AboutInfo from "./AboutInfo";

function HomeMain() {
  return (
    <>
      <Reveal effect="animNav">
        <NavbarSection />
      </Reveal>
      <AboutInfo />
    </>
  );
}

export default HomeMain;
