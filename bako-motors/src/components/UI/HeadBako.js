import React from 'react'
import { Container } from 'reactstrap'
import Slider from'react-slick'
import '../../styles/head-bako.css'

const HeadBako = () => {
  return (
    <Slider className="header-slider">
    <div className="slider_item2 slider_item-02">
    <Container>
        <div className="slider-bako-content">
           
            <h1>Bako </h1>
           <h2>Powred with <h3 style={{fontSize:'0.8em',fontWeight:'400',color:"#ffbe00",marginLeft:"63%"}}>sun</h3></h2>
        
        </div>
        
    </Container>
    </div>
     </Slider>
  )
}

export default HeadBako