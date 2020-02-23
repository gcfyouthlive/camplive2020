import React from "react";
import "./jumbotron.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { WordLogo } from "./logos";
import { FindOutMoreButton, RegisterButton } from "./buttons";

export function HSCampJumbotron() {
  return (
    <div className="camp-jumbotron">
      <Container>
        <Row>
          <Col sm={12}><WordLogo /></Col>
          <Col sm={12}>
            <div className="date">May 28-31, 2020</div>
            <div className="venue">Hacienda Gracia, Pampanga</div>
            <div className="years">For Incoming Gr. 7 &mdash; Gr. 12</div>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <FindOutMoreButton />
          </Col>
          <Col className="text-left">
            <RegisterButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
