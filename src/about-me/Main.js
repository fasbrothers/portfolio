import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import db from "../firebase/config";

function Main() {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    db.collection("about").onSnapshot((snapshot) => {
      setAbouts(snapshot.docs.map((doc) => doc.data()));
    });
  });
  return (
    <>
      <Container>
        <Row>
          {abouts.map((about, index) => (
            <Col md="12" key={index}>
              <div className="aboutCard">
                <img src={about.image} alt="about img" className="aboutImage" />
                <div className="aboutInfo">
                  <div className="about">
                    <p className="aboutText1">{about.text1}</p>
                    <h1 className="aboutBold">{about.bold}</h1>
                    <p className="aboutText1">{about.text2}</p>
                    <div className="aboutTech">
                      <div className="techInfo">
                        <img src={about.html_css} alt="html_css" />
                        <p className="name">{about.tHtml}</p>
                      </div>
                      <div className="techInfo">
                        <img src={about.js} alt="js" />
                        <p className="name">{about.tJs}</p>
                      </div>
                      <div className="techInfo">
                        <img src={about.bootstrap} alt="bootstrap" />
                        <p className="name">{about.tBootstrap}</p>
                      </div>
                      <div className="techInfo">
                        <img src={about.sass} alt="sass" />
                        <p className="name">{about.tSass}</p>
                      </div>
                      <div className="techInfo">
                        <img src={about.react} alt="react" />
                        <p className="name">{about.tReact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Main;
