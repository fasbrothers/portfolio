import React, { useEffect, useState } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import db from "../firebase/config";
import { Col, Container, Row } from "reactstrap";

function Project() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    db.collection("project").onSnapshot((snapshot) => {
      setProjects(snapshot.docs.map((doc) => doc.data()));
    });
  });
  return (
    <>
      <Container>
        <Row>
          {projects.map((project, index) => (
            <Col md="12" key={index}>
              <div className="projectCard">
                <img src={project.image} alt="portfolio img" className='projectImage' />
                <div className="projectInfo">
                  <div className="projectAbout">
                    <h3 className='projectName'>{project.name}</h3>
                    <p className='projectDesc'>{project.description}</p>
                  </div>
                  <div className="projectButtons">
                    <a href={project.code} target="_blank" className="buttons">
                      Source <GitHubIcon />
                    </a>
                    <a href={project.demo} target="_blank" className="buttons">
                      Link <LinkIcon />
                    </a>
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

export default Project;
