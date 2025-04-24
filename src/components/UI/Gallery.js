import React from 'react'
import '../../styles/gallery.css'
import { Container, Col, Row } from 'reactstrap'
import img1 from '../../assets/all-images/gallery-img/img1.jpg'
import img2 from '../../assets/all-images/gallery-img/img2.jpg'
import img3 from '../../assets/all-images/gallery-img/img3.jpg'
import img4 from '../../assets/all-images/gallery-img/img4.jpg'
import img5 from '../../assets/all-images/gallery-img/img5.jpg'
import img6 from '../../assets/all-images/gallery-img/img6.jpg'

const Gallery = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold", color: "#ffbe00", marginTop: "7%" }}>Gallery photo</h1>
      <Container className='mt-5'>
        <Row className='justify-content-center'>
          <Col lg={4} md={6} sm={12} className='mb-4 d-flex flex-column align-items-center'>
            <img src={img1} className='gallery-img mb-4' />
            <img src={img4} className='gallery-img mb-4' />
          </Col>
          <Col lg={4} md={6} sm={12} className='mb-4 d-flex flex-column align-items-center'>
            <img src={img2} className='gallery-img mb-4' />
            <img src={img5} className='gallery-img mb-4' />
          </Col>
          <Col lg={4} md={6} sm={12} className='mb-4 d-flex flex-column align-items-center'>
            <img src={img3} className='gallery-img mb-4' />
            <img src={img6} className='gallery-img mb-4' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Gallery
