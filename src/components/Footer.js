import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../styles/footer.css";
import logo from '../assets/all-images/logo.png'
const Footer = () => {
  const quickLinks = [
    {
      path: "/bakoB1",
      display: "BakoB1",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/blog",
      display: "Blog",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            
            <div className="footer-content mt-5">
              <i class="ri-map-pin-5-line"></i>2082 Rue de Beja, Fouchanaa{" "}
              <br />
              <i class="ri-phone-fill"></i>50222820 <br />
              <i class="ri-mail-line"></i>info@bakomotors.com
            </div>
           
              <Link to="/"><img src={logo} className="logo" /></Link>
            
          </Col>
          <Col lg="4" md="4" sm="12">
            <h5 style={{color:"#fff",fontWeight:'bold',marginLeft:'40px',marginTop:"40px"}}>quick Links</h5>
            <ListGroup className="mt-4">
              {quickLinks.map((item, index) => (
                <ListGroupItem key={index} className="quickLinks">
                  <i class="ri-arrow-left-s-line"></i>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="4" md="4" sm="12">
            <div className="newsletter mt-5">
              <h5 className="title">Subscribe Us</h5>
              <div className="section-description">
                <p>
                  Get our weekly newsletter for latest car news exclusive offers
                  and deals and more . Don’t worry we don’t spam
                </p>
              </div>
              <div className="form mt-3 ">
                <input type="email" placeholder="email" />
                <button className="btn-sub">Subscribe</button>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer-bottom">
              <span>
                <i class="ri-copyright-line"></i> Copyrights 2023 Bako-Motors,
                All rights reserved.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
