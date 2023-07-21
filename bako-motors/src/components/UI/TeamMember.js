import React from 'react'
import { Container, Row, Col } from "reactstrap"
import '../../styles/team-member.css'
import boubakerSiala from '../../assets/all-images/boubakerSiala.png'
import KhaledHabeieb from '../../assets/all-images/KhaledHabeieb.png'
import MahdiTekaya from '../../assets/all-images/MahdiTekaya.png'
const TeamMember = () => {
  return (
    <section className="member mb-3"style={{  marginTop:"3%"}}>
    <h1 >Team Members</h1>
    <div style={{background:'#000'}}>
    <Container >
      <Row>
        <Col lg="4" md="4" sm="12">
            
          <div className="m1  ">
          <img src={boubakerSiala} />
            <h2 >Boubaker Siala</h2>
            <h3 > ​CEO Bako Motors <br/>EX BMW|EX BOSH</h3>

           
           </div>
           </Col>
           <Col lg="4" md="4" sm="12">
          <div className="m2 pb-4  ">
          <img src={KhaledHabeieb}/>
            <h2 >Khaled Habeieb</h2>
            <h3 > Director operation</h3>
           
           </div>
           </Col>
           <Col lg="4" md="4" sm="12">
          <div className="m3 pb-4  ">
          <img src={MahdiTekaya} />
            <h2 >Mahdi Tekaya</h2>
            <h3 >CEO Wevioo</h3>
           
           </div>
           </Col>
          
        
      </Row>
    </Container>
    </div>
  </section>
    
  )
}

export default TeamMember