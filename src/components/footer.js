import React from "react";
import './footer.css';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import yl from "../svg/youthlive-white.svg"
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="footer">
      <Container fluid={true}>
        <Row className={"align-content-center"}>
          <Col sm={"1"}>
            <img src={yl} style={{maxWidth: 60 + 'px'}}></img>
          </Col>
          <Col sm={"11"}>
            <p style={{fontSize: 12 + 'px'}} >Made with &lt;3 by @montanohanz & @joshuagad (c) 2020</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
