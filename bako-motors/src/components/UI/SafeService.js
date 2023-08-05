import React from 'react'
import { Container, Row, Col, Button } from "reactstrap";
import "../../styles/safe-service.css";
import CE from '../../assets/all-images/cars-img/CE.jpg'
import drive from '../../assets/all-images/cars-img/drive.jpg'
import volon from '../../assets/all-images/cars-img/volon.jpg'

const SafeService = () => {
  return (
    <>
     
    <section style={{background:"#faf9fd"}} >
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div className="safeservice ">
              <h1 >Safety</h1>
              <p>
              Safety is among our priorities 
            in the development of the Bako B1. 
            Thanks to its fiberglass composition 
            reinforced with carbon fiber,
            the body of B1 resists major shocks 
            while retaining its lightness.

              </p>
              <button>Pre-order now</button>
               </div>
          </Col>
          <Col lg="6" md="6" sm="12">
            <img src={CE}  style={{width:"50%",marginLeft:"50%",marginTop:"30%"}}/>
            <img src={volon}  style={{width:"50%",marginLeft:"50%",marginTop:"2%",marginBottom:"10%"}}/>
          </Col>
        </Row>
      </Container>
      </section>
      <section className='drive'>
        <Container>
            <Row>
            <Col lg="6" md="6" sm="12">
                    <p>Application “MyBako” 
                    for the suivi de l'état du véhicule,
                    Camera de recul, GPS integrated
                    </p>

                </Col>
                <Col lg="6" md="6" sm="12">
                    <p>Application “MyBako” 
                    for the suivi de l'état du véhicule,
                    Camera de recul, GPS integrated
                    </p>

                </Col>
               
            </Row>
        </Container>
      </section>
      <section style={{background:"#faf9fd",margin:"0",padding:"60px 0"}} >
      
      <Container className='text-center'>
        <Row>
        <Col lg="4" md="4" sm="12">
        
        <i class="ri-arrow-turn-forward-line"></i><h2>Fast</h2>
             
           
          </Col>  
          
        <Col lg="4" md="4" sm="12">
            
            <i class="ri-arrow-go-forward-fill" ></i><h2>Profesional</h2>
              
           
          </Col>
          <Col lg="4" md="4" sm="12">
                   <i class="ri-arrow-turn-forward-line"></i><h2>Reliable</h2>
              
           </Col>
        </Row>
      </Container>
     
      </section>
     
      </>
  )
}

export default SafeService