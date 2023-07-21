import React from "react";
import { Container, Row, Col } from "reactstrap"
import '../../styles/boubaker-siala.css'
import bakonoir from '../../assets/all-images/bakonoir.png'

const BoubakerSiala = () => {
  return (
    <section className="boubakerSiala ">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <img src={bakonoir} className="bakonoir " />
          </Col>
          <Col lg="6" md="6" sm="12">
            <div className="description">
            
              
              <p>
                In 2021, I said to myself that havinga photovoltaic company and
                significant experience in the automotive industry, why not make
                a vehicle that runs on solar energy?...
              </p>
              <button className="btn-plus">Read More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BoubakerSiala;
