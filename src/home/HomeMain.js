import React from "react";
import NavbarSection from "./NavbarSection";
import Reveal from "react-reveal/Reveal";

function HomeMain() {
  return (
    <>
      <Reveal effect="animNav">
        <NavbarSection />
      </Reveal>
    </>
  );
}

export default HomeMain;
