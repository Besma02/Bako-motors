import React from 'react'
import { Container,Col,Row } from 'reactstrap'
import "../../styles/bako.details.css";
import bakorun from '../../assets/all-images/cars-img/bakorun.png'
import energie from '../../assets/all-images/cars-img/energie.png'
import money from '../../assets/all-images/cars-img/money.png'
import caurant from '../../assets/all-images/cars-img/caurant.png'
import prix from '../../assets/all-images/cars-img/prix.png'
const Bakocara = () => {
  return (
    <section style={{marginTop:"10%"}}>
      <Container>
       <Row>
       <Col lg="6" md="6" sm="12" >
           <div className='cara'>
           <img src={energie}  className='more'/>
           <p>Solar energy makes you travel 
             17,500 km/year</p>
             </div>
             <div className='cara'>
             <img src={money} className='more' />
           <p>The daily consumption does not exceed
             1500 mm / 100 km</p>
             </div>
             <div className='cara'>
             <img src={caurant} className='more'  />
           <p>It has a Lithium Battery 
            charged into a normal prise
           </p>
            </div>
            <div className='cara'>
             <img src={prix} className='more'  />
           <p>Prix</p>
           </div>
            </Col>
        <Col lg="6" md="6" sm="12" >
           <img src={bakorun} className="bakorun" />
            </Col>
         </Row>
        </Container>
        </section>
  )
}

export default Bakocara