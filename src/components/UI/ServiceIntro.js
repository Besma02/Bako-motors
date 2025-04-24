import React from 'react'
import { Container, Row, Col, Button } from "reactstrap";
import "../../styles/service-intro.css";
import cardelivrey from '../../assets/all-images/cars-img/cardelivrey.png'

const ServiceIntro = () => {
  return (
    <>
    <section >
      <Container>
        <Row>
          <Col lg="12">
            <div className="serviceintro  ">
              <h1 >Our Service</h1>
              <p>
              Bako Motors is an ideal solution for your 
            delivery services
            It offers you an extremely economical consumption
            which costs only 1.5 DT per 100 km !!! and you can travel 
            up to 17,500 km a year for free thanks to sun

              </p>
              
            </div>
          </Col>
        </Row>
      </Container>
      
      <section className='delivrey'>
      <h2 >Delivery Service 
             </h2>
             <p>The B1 is mainly intended for delivery professionals
                It’s strengths.Safety and comfort for the delivery 
                conforming to European standards, ergonomic
                loading space, automatic  transmission  
                and reversing camera.
            </p>
            <button>Read More</button>
            <img src={cardelivrey}  />
            </section>
      </section>
      </>
  )
}

export default ServiceIntro