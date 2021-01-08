import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
export default function About() {
  return (
    <div>
      <img src="Picture/spec.gif " alt="spec" className="hero-img"></img>
      <div className="hero-text">
        <h1>
          Graphic design in allweb.
          <br /> Specialists in branding, digital marketing and website.
        </h1>
        <br />
        <Link to="/portfolio">
          <button className="button">
            <span>View Portfolio</span>
          </button>
        </Link>
      </div>
      <h1 className="texth1">About</h1>
      <div>
        <Container className="texth1">
          <Row>
            <Col>
              <h3>Technology </h3>
              - Smart Building <br />
              - Technology Network System / Fiber Optic <br />
              - Security System <br />
              - Sensor System <br />
              - Planetarium
              <br />
            </Col>
            <Col>
              <h3>Solution</h3>
              - IT Management Solution <br />
              - Software Design & Development
              <br />
              - WebDesign & Development <br />
            </Col>
            <Col>
              <h3>Design</h3>
              - Digital Media Design <br />
              - Interactive Design <br />
              - Hologram 3D <br />
              - AR(Augmented Reality) Technology <br />
              - Exhibition Design <br />
              - Project Development <br />
              - Project Management
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
