import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about.css";
const About = () => {
  return (
    <section >
      <Container>
        <Row>
          <Col lg="12">
            <div className="about-content  ">
              <h1 className="subtitle ">About us</h1>
              <p>
                The world of transport is moving more and more towards electric
                Bako Motors is a Tunisian innovation with German technology
                compliant with European Standards.Founded by Boubaker Siala, it
                develops and manifacture solar electric vehicules.
              </p>
              <button className="btn-plus">Read More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
