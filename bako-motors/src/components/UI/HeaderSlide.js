import React from 'react'
import { Container } from 'reactstrap'
import Slider from'react-slick'
import '../../styles/header-slide.css'
import bako from '../../assets/all-images/cars-img/bako.png'
const HeaderSlide = () => {
    // const settings = {
    //     fade: true,
    //     speed: 2000,
    //     autoplaySpeed: 3000,
    //     infinite: true,
    //     autoplay: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     pauseOnHover: false,
    //   };
  return (
  <Slider className="header-slider">
    <div className="slider_item slider_item-01">
    <Container>
        <div className="slider-content">
            <img src={bako} className='bako-img' />
            <h1>DRIVE </h1>
           <h2>SAFETLY</h2>
        <div className="bako-info">
          <div>  
         <p>2082 Rue de Beja, Fouchanaa</p>
         </div>
         <div>
         <p><i class="ri-phone-fill"></i>CALL NOW 50222820</p>
         </div>
         <div>
         <p>info@bakomotors.com</p>
         </div>
         </div>

        </div>
        
    </Container>
    </div>
     </Slider>
  )
}

export default HeaderSlide