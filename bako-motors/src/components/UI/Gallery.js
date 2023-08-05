import React from 'react'
import { Container,Col,Row } from 'reactstrap'
import img1 from '../../assets/all-images/gallery-img/img1.jpg'
import img2 from '../../assets/all-images/gallery-img/img2.jpg'
import img3 from '../../assets/all-images/gallery-img/img3.jpg'
import img4 from '../../assets/all-images/gallery-img/img4.jpg'
import img5 from '../../assets/all-images/gallery-img/img5.jpg'
import img6 from '../../assets/all-images/gallery-img/img6.jpg'

const Gallery = () => {
  return (
    <>
    <h1 style={{textAlign:"center",fontWeight:"bold",color:"#ffbe00",marginTop:"7%"}}>Gallery photo</h1>
    <Container className='mt-5'>
    <Row>
    <Col lg={4} md={12} className='mb-4 mb-lg-0'>
      <img
        src={img1}
        className='w-100 shadow-1-strong rounded mb-4'
        
      />

      <img
        src={img4}
        className='w-100 shadow-1-strong rounded mb-4'
      
      />
    </Col>

    <Col lg={4} className='mb-4 mb-lg-0'>
      <img
        src={img2}
        className='w-100 shadow-1-strong rounded mb-4'
        
      />

      <img
        src={img5}
        className='w-100 shadow-1-strong rounded mb-4'
        
      />
    </Col>

    <Col lg={4} className='mb-4 mb-lg-0'>
      <img
        src={img3}
        className='w-100 shadow-1-strong rounded mb-4'
        
      />

      <img
        src={img6}
        className='w-100 shadow-1-strong rounded mb-4'
        
      />
    </Col>
  </Row>
  </Container>
  </>
  )
}

export default Gallery
