import React from 'react'
import { Container, Row, Col } from "reactstrap"
import '../../styles/bako-info.css'
import boubaker from '../../assets/all-images/boubaker.png'
const BakoInfo = () => {
  return (
    
    <section style={{  marginTop:"3%",backgroundColor: 'rgb(240, 237, 237)',marginBottom:'20px'}}>
    <Container>
      <Row>
        <Col lg="6" md="6" sm="12">
          <div className="bako-content  ">
            <h2 >The idea of</h2>
            <h1 > ​​Bako Motors</h1>
            <p>
            Convinced that <span style={{fontWeight:"bold"}} >"Teamwork Makes the Dream Work" </span>
            and that it is enough to have a <span style={{fontWeight:"bold"}} > team </span>and to be
            endowed with the will and perseverance to go far,  
            <span style={{fontWeight:"bold"}} >Boubaker Siala</span> embarked on this new adventure
            with his own means. 
            Today, his <span style={{fontWeight:"bold"}} >dream</span> is beginning to take <span style={{fontWeight:"bold"}} >shape, </span>
            materialize and grow by targeting the African 
            market.
             </p>
           </div>
           </Col>
          
           <Col lg="6" md="6" sm="12" className='title '>
           <div >
            <img src={boubaker} className='Siala '/>
            </div>
            <h1><i class="ri-arrow-left-s-line"></i>Boubaker Siala</h1>
            
           </Col>
           
        
      </Row>
    </Container>
  </section>
  

      
  

  
  )
}

export default BakoInfo