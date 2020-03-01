import React from "react";
import "./registration.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// import { Formik } from 'formik';

function CampFormInput(props) {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder}/>
        </Form.Group>
    );
}

function CampDropdown(props) {
    // to edit: dropdown code
    // for now, it is the same as CampFormInput
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder}/>
        </Form.Group>
    );
}

function CampFormTextarea(props) {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as="textarea" type={props.type} placeholder={props.placeholder}/>
        </Form.Group>
    );
}

function RegForm() {
    return (
        <Form>
            <Form.Row>
                <Col sm={12}><CampFormInput controlId="email" label="Email" type="email"
                                            placeholder="Email address"/></Col>
            </Form.Row>
            <Form.Row>
                <Col sm={6}><CampFormInput controlId="first_name" label="First Name" type="text"/></Col>
                <Col sm={6}><CampFormInput controlId="last_name" label="Last Name" type="text"/></Col>
            </Form.Row>
            <Form.Row>
                <Col sm={6}><CampFormInput controlId="nickname" label="Nickname" type="text"/></Col>
                <Col sm={6}><CampFormInput controlId="gender" label="Gender" type="text"/></Col>
            </Form.Row>
            <Form.Row>
                <Col xs={3}><CampFormInput controlId="birthmonth" label="MM" type="number"/></Col>
                <Col xs={3}><CampFormInput controlId="birthday" label="DD" type="number"/></Col>
                <Col xs={6}><CampFormInput controlId="birthyear" label="YYYY" type="number"/></Col>
            </Form.Row>
            <Form.Row>
                <Col sm={12}><CampFormInput controlId="school" label="School" type="text"/></Col>
            </Form.Row>
            <Form.Row>
                <Col sm={6}><CampFormInput controlId="year" label="Year" type="text"/></Col>
                <Col sm={6}><CampFormInput controlId="contactno" label="Mobile No. (09XXXXXXXXX)" type="tel"/></Col>
            </Form.Row>
            <Form.Row>
                <Col sm={12}><CampFormTextarea controlId="" label="Special Concerns" type="text"/></Col>
            </Form.Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default function CampReg() {
    return (
        <div id={'form'} className={'campreg-container'}>
            <Container fluid={false}>
                <RegForm/>
            </Container>
        </div>
    );
}
