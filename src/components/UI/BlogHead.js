import React from 'react'
import { Container } from 'reactstrap'
import Slider from'react-slick'
import '../../styles/blog-head.css'

const BlogHead = () => {
  return (
    <Slider className="header-slider">
    <div className="slider_item4 slider_item-04">
    <Container>
        <div className="slider-blog-content">
           
            <h1>Keep<br/>
            <span style={{fontWeight:"600",fontSize:"0.8em"}}>a way </span>
             </h1>
          
        
        </div>
        
    </Container>
    </div>
     </Slider>
  )
}

export default BlogHead