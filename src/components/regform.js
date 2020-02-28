import React from 'react';
import './regform.css'

import {Col, Container, Row} from "react-bootstrap";

export default function RegForm(){
  return (
    <div id={'regform'}>
      <Container fluid={false}>
        <div className={'justify-content-center'}>
          <h1>Ready? Follow these 4 steps to sign up for camp.</h1>
          <Row>
            <Col sm={12} md={3}>Step1</Col>
            <Col sm={12} md={3}>Step2</Col>
            <Col sm={12} md={3}>Step3</Col>
            <Col sm={12} md={3}>Step4</Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
