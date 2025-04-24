import React from 'react'
import { Container } from 'reactstrap'
import Slider from'react-slick'
import '../../styles/head-service.css'
const HeadService = () => {
  return (
    <Slider className="header-slider">
    <div className="slider_item3 slider_item-03">
    <Container>
        <div className="slider-service-content">
           
            <h1 style={{fontWeight:"bold"}}>Keep your<br/>
            <span style={{fontWeight:"600",fontSize:"0.8em"}}>path </span>
             </h1>
           <h2>simple &
            practical </h2>
        
        </div>
        
    </Container>
    </div>
     </Slider>
  )
}

export default HeadService