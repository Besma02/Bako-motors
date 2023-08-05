import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/aboutB1.css";

const AboutB1 = () => {
  return (
    <>
    <section >
      <Container>
        <Row>
          <Col lg="12">
            <div className="aboutB1  ">
              <h1 >Bkao B1</h1>
              <p>
            The first as a Tunisian awe with German
            technology that runs on electric and solar
            energy.
            L’innovation consiste en la conception 
            d’un tricycle équipé d’une batterie électrique
            soutenue par un panneau solaire. 

              </p>
              <h2 className="subtitle">Les avantages de Bako Motors : 
             </h2>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
     
      <section className="B1avantage">
      <Container >
        <Row>
          <Col lg="12">
          
            <div >
         
              <p>
              le coût d’exploitation est très bas, 
            de 1 dinar  seulement pour 100 km parcourus,
            Le système de ravitaillement est  composé 
            d’une batterie  électrique rechargeable fournissant
            une autonomie de 80 km soutenue par
            un panneau photovoltaïque qui lui fournit 
            une autonomie supplémentaire de 50 km,

              </p>
              <button className="btn">Read More</button>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
   
    </>
  )
}

export default AboutB1