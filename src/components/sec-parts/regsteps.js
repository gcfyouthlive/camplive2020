import React from 'react';
import './regsteps.css'

import {Col, Container, Row} from "react-bootstrap";
import ButtonCTA from "../buttons";
import {Link} from "react-router-dom";

import Step1 from '../../img/step1.png';
import Step2 from '../../img/step2.png';
import Step3 from '../../img/step3.png';
import Step4 from '../../img/step4.png';

export default function RegSteps(){
  return (
    <div id={'regform'}>
      <Container fluid={true}>
        <div className={'justify-content-center'}>
          <h1>Ready? Follow these 4 steps to sign up for camp.</h1>
          <Row>
            <Col sm={12} md={3}>
              <img src={Step1}  className={'step-img'}/>
              <h4>Step 1</h4>
              <p>Fill up the form on this website.</p>
            </Col>
            <Col sm={12} md={3}>
              <img src={Step2} className={'step-img'}/>
              <h4>Step 2</h4>
              <p>
                Look for your confirmation PDF in your inbox.<br />
                (Optional: Print out your PDF)
              </p>
            </Col>
            <Col sm={12} md={3}>
              <img src={Step3} className={'step-img'}/>
              <h4>Step 3</h4>
              <p>Present your confirmation PDF and pay for the camp fee at our CampLIVE Booth located at the GCF Lobby every sunday.</p>
            </Col>
            <Col sm={12} md={3}>
              <img src={Step4} className={'step-img'}/>
              <h4>Step 4</h4>
              <p>Get ready for camp!</p>
            </Col>
          </Row>
        </div>
        <Link to={"/form"}><ButtonCTA text={'Start'}/></Link>
      </Container>
    </div>
  )
}
