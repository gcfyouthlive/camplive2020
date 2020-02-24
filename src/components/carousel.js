import React from "react";
import "./carousel.css";

import Carousel from "react-bootstrap/Carousel";

import word_image from "../img/WORD.jpg";
import camplive_image from "../img/CAMPLIVE.jpg";
import youthlive_image from "../img/YOUTHLIVE.jpg";

import camplive_logo from "../svg/camplive-white.svg";
import youthlive_logo from "../svg/youthlive-white.svg";

export default function CampCarousel() {
  return (
    <Carousel className="camp-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={word_image}
          alt="What is Word?"
        />
        <Carousel.Caption>
          <h3 style={{"fontFamily":"Playfair Display"}}>Word.</h3>
          <p>YEAH IM SLEEPY</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={camplive_image}
          alt="What is CampLIVE?"
        />
        <Carousel.Caption>
          <img src={camplive_logo} height="35px" alt="CampLIVE"/>
          <p>Our annual 4-day camp is packed with activities that will help you know Christ more through His word.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={youthlive_image}
          alt="What is YouthLIVE?"
        />

        <Carousel.Caption>
          <img src={youthlive_logo} height="35px" alt="YouthLIVE"/>
          <p>We are a community of high school and college students committed to Jesus's call to discipleship.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
