import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/aboutB1.css";

const AboutB1 = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="aboutB1  ">
                <h1>Bkao B1</h1>
                <p>
                  The first as a Tunisian awe with German technology that runs
                  on electric and solar energy. The innovation consists of the
                  design of a tricycle equipped with an electric battery
                  supported by a solar panel.
                </p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="B1avantage">
        <Container>
          <Row>
            <Col lg="12">
              <div>
              <h2 >The advantages of Bako Motors</h2>
                <p>
                  The operating cost is very low, at only 1 dinar for 100 km
                  traveled. The refueling system consists of a rechargeable
                  electric battery providing a range of 80 km, supported by a
                  photovoltaic panel that provides an additional range of 50 km.
                </p>
                <button className="btn">Read More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutB1;
