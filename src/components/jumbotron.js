import React from "react";
import "./jumbotron.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { WordLogo } from "./logos";
import ButtonCTA from "./buttons";


export function HSCampJumbotron() {
  return (
    <div className="camp-jumbotron d-flex text-center align-items-center">
      <Container>
        <Row>
          <Col sm={12}><WordLogo /></Col>
          <Col sm={12}>
            <div className="date">May 28-31, 2020</div>
            <div className="venue">Hacienda Gracia, Pampanga</div>
            <div className="years">For Incoming Gr. 7 &mdash; Gr. 12</div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={6} className="mb-1 mb-sm-0 text-sm-right">
            <ButtonCTA href="#about" text={'Find Out More'}/>
          </Col>
          <Col sm={6} className="mt-1 mt-sm-0 text-sm-left">
            <ButtonCTA href={'#regform'} text={'Register Now'} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
