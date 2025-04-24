import React from 'react'
import { Container, Row, Col } from "reactstrap"
import '../../styles/bako-b1.css'
import bakoblanc from '../../assets/all-images/bakoblanc.png'
import route from '../../assets/all-images/route.jpg'

const BakoB1 = () => {
  return (
    <section className="bakoB1 ">
        <h1>Bako <span style={{fontWeight:'bold',color:'#000'}}>B1</span></h1>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <h2><i class="ri-arrow-left-s-line"></i>Eco-Friendly<br/><i class="ri-arrow-left-s-line"></i>Cos-Effective</h2>

          </Col>
          <Col lg="6" md="6" sm="12">
            
            <img src={bakoblanc} className="bakoblanc " />
            </Col>
            
        </Row>
      </Container>
      <img src={route} className="route" />
      
      <p  className='distance'><span className='km' > Free </span> 17500 km/year from the <span className='km'> sun </span> </p>

    </section>
  )
}

export default BakoB1