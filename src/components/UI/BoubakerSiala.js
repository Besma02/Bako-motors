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
            
            <h1 >Dream Done</h1>
              <p>
                In 2021,I said to myself that i should have a photovoltaic company and have a
                significant experience in the automotive industry,so why not making
                vehicle runing on solar energy?...
              </p>
              <div>

              <a href=""><button className="btn-plus">Read More</button></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BoubakerSiala;
