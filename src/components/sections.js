import React from "react";
import "./sections.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CampTagline from "./sec-parts/tagline";
import CampCarousel from "./sec-parts/carousel";
import CampSpeakers from "./sec-parts/speakers";
import CampReg from "./registration";
import CampFaq from "./sec-parts/faq";
import CampFee from './sec-parts/campfee';
import CampExpect from './sec-parts/expect'

export default function Sections() {
  return (
    <div>
      <Container fluid={true}>
        <Row>

          <Col sm={12} md={6} /*xl={4}*/ className="tagline-section">
            <CampTagline />
          </Col>
          <Col sm={12} md={6} /*xl={4}*/ className="carousel-section">
            <CampCarousel />
          </Col>
          <Col sm={12} md={6} /*xl={4}*/ className="campfee-section">
            <CampFee />
          </Col>
          <Col sm={12} md={6} /*xl={4}*/ className="faqs-section">
            <CampFaq />
          </Col>

        </Row>
        <Row>
          <CampReg />
        </Row>
      </Container>
    </div>
  );
}
