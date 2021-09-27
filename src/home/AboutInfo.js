import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase/config";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import Reveal from "react-reveal/Reveal";

function AboutInfo() {
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    db.collection("portfolio").onSnapshot((snapshot) => {
      setPortfolios(snapshot.docs.map((doc) => doc.data()));
    });
  });
  return (
    <div className="aboutInfo">
      {portfolios.map((portfolio) => (
        <>
          <div className="side2">
            <img src={portfolio.image} className="myImage" alt="my-pho" />
          </div>
          <div className="side1">
            <Reveal effect="fadeInUp" duration="1250">
              <h1 className="title">{portfolio.title}</h1>
              <p className="description">{portfolio.description}</p>
            </Reveal>
            <div className="buttons">
              <Link to="/" className="linkBtn">
                About me
              </Link>
              <Link to="/" className="linkBtn">
                Portfolio
              </Link>
            </div>
            <div className="socialNet">
              <a href="https://github.com/fasbrothers" target="_blank">
                <GitHubIcon className="svgIcon" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjar-nigmatov-788415221/"
                target="_blank"
              >
                <LinkedInIcon className="svgIcon" />
              </a>
              <a
                href="https://www.instagram.com/sanjar_nigmatov19/"
                target="_blank"
              >
                <InstagramIcon className="svgIcon" />
              </a>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default AboutInfo;
