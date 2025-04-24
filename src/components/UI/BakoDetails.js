import React from 'react'
import { Container,Col,Row } from 'reactstrap'
import composant from '../../assets/all-images/cars-img/composant.png'
import puissance from '../../assets/all-images/cars-img/puissance.png'
import batterie from '../../assets/all-images/cars-img/batterie.png'
import volume from '../../assets/all-images/cars-img/volume.png'
import "../../styles/bako.details.css";
const BakoDetails = () => {
  return (
    <>
    <h2 className="subtitle">Technical characteristics 
    </h2>
    <section className="carabako">
      <Container>
       
        <Row>
        <Col lg="6" md="6" sm="12">
            <img src={composant}/>
            </Col>
          <Col lg="6" md="6" sm="12">
            <div className="composantB1">
              <h3 >galvanized frame
             </h3>
              <p>
              conforming to European
            specifications, which is
            characterized by hardness 
            and resistance against pus. 
            With a warranty of up to 20 years!

              </p>
             
            </div>
          </Col>
        </Row>
        </Container>
        
            <Container style={{background:"#fff",boxShadow:" 1px 1px 1px 1px rgba(0, 0, 0, 0.5)",marginTop:"5%"}}>
        <Row >
        <Col lg="3" md="3" sm="4" >
            <img src={puissance} style={{width:"35%",margin:"15%  15% 8%"}}/>
            <h5 style={{marginLeft:"15%"}}>4000 watts</h5>
            </Col>
          <Col lg="3" md="3" sm="4" >
            
              <p style={{width:"80%",margin:"10% 0",lineHeight:"2.4rem"}}>
              *Max range 200km/<br/>
              *Top speed 45km/h /
              *CO2Emission 0g/km
              *0.5$/100km/   
              *50km/day from
              </p>
              </Col>
              <Col lg="3" md="3" sm="4" className='volume'>
            
              <img src={volume} style={{width:"100%",margin:"10% 0"}}/>
              
              </Col>
              <Col lg="3" md="3" sm="4">
            
            <img src={batterie} style={{width:"30%",margin:"10% 30% 2%"}}/>
            <p style={{width:"60%",margin:"0 30%",lineHeight:"2.2rem"}}>
              *type lithium/
              *full charge duration 3h,9h
              </p>
            </Col>
        </Row>
      </Container>
      </section>
      </>
  )
}

export default BakoDetails