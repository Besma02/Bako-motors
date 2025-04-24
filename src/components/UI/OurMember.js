import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava01.jpg";
import ava02 from "../../assets/all-images/ava02.jpg";
import ava03 from "../../assets/all-images/ava03.jpg";
import ava04 from "../../assets/all-images/ava04.jpg";

const OUR__MEMBERS = [
  {
    name: "Enda Tamweel",
    experience: "Enda Tamweel is the pioneer and leader of microfinance institutions in Tunisia.",
    fbUrl: "https://www.facebook.com/endatamweel",
    instUrl: "https://www.instagram.com/enda_tamweel/",
    twitUrl: "#",
    linkedinUrl: "https://www.linkedin.com/company/enda-tamweel/?originalSubdomain=fr",
    imgUrl: ava01,
  },

  {
    name: "Smart Tunisie",
    experience: "Computer importer wholesaler since 1997. Aimed at IT professionals",
    fbUrl: "https://www.facebook.com/smartunisie",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Akdhi",
    experience: "innovative and eco-responsible online supermarket.",
    fbUrl: "https://www.facebook.com/Akdhiii",
    instUrl: "https://www.instagram.com/akdhi_com/?hl=fr",
    twitUrl: "https://twitter.com/Akdhi_com",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Jumia",
    experience: "The best place to buy and sell products in Tunis",
    fbUrl: "https://www.facebook.com/JumiaTN",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;