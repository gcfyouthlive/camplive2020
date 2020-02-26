import React from "react";
import "./sections.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CampTagline from "./sec-parts/tagline";
import CampCarousel from "./sec-parts/carousel";
import CampSpeakers from "./sec-parts/speakers";
import CampFaq from "./sec-parts/faq";
import CampFee from "./campfee";

export default function Sections() {
  return (
    <div>
      <Container fluid={true}>
        <Row>

          <Col sm={12} md={6} xl={4} className="tagline-section">
            <CampTagline />
          </Col>
          <Col sm={12} md={6} xl={4} className="carousel-section">
            <CampCarousel />
          </Col>
          <Col sm={12} md={6} xl={4} className="expect-section">
          </Col>
          <Col sm={12} md={6} xl={4} className="campfee-section">
            <CampFee />
          </Col>
          <Col sm={12} md={6} xl={4} className="speakers-section">
            <CampSpeakers />
          </Col>
          <Col sm={12} md={6} xl={4} className="faqs-section">
            <CampFaq />
          </Col>

        </Row>
      </Container>
    </div>
  );
}
