import React from "react";
import "./registration.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import { Formik } from 'formik';
import * as yup from 'yup';

const endpoint = 'https://api.gcfyouthlive.com/api/';

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const schema = yup.object({
    firstname: yup
        .string()
        .required(),
    lastname: yup
        .string()
        .required(),
    email: yup.string()
        .email()
        .required(),
    sex: yup
        .string()
        .required(),
    birthday: yup
        .date()
        .required(),
    school: yup
        .string()
        .required(),
    year: yup
        .string()
        .required(),
    contact: yup
        .number()
        .positive()
        .required(),
    emc_name: yup
        .string()
        .required(),
    emc_num: yup
        .number()
        .positive()
        .required(),
    concerns: yup
        .string(),
});


class RegForm2 extends React.Component {

    render() {
        return (
            <Formik validationSchema={schema}
                    onSubmit={data => {
                        var formdata = new FormData();
                        formdata.append("firstname", data.firstname);
                        formdata.append("lastname", data.lastname);
                        formdata.append("birthday", data.birthday);
                        formdata.append("email", data.email);
                        formdata.append("contact", data.contact);
                        formdata.append("sex", data.sex);
                        formdata.append("school", data.school);
                        formdata.append("level", "0");
                        formdata.append("year", data.year);
                        formdata.append("emc_name", data.emc_name);
                        formdata.append("emc_num", data.emc_num);
                        formdata.append("emc_relation", data.emc_relation);
                        formdata.append("concerns", data.concerns);

                        var xhr = new XMLHttpRequest();
                        xhr.withCredentials = false;

                        xhr.addEventListener("readystatechange", function() {
                            if(this.readyState === 4) {
                                console.log('response', this.responseText);
                                console.log('status', this.status);
                                var responseText = this.responseText;
                                if (this.status === 0) {
                                    alert("Sorry! API Server is temporarily unavailable. Please try again in a bit or message us @gcfyouthlive. \r ERR_CODE: ERR_CONNECTION_REFUSED")
                                }

                                if (this.status === 400) {
                                    alert("Uh oh! We've hit an error! Perhaps you've already registered? ERR_CODE: "+this.status+''+this.responseText)
                                }
                                if (this.status === 500) {
                                    alert("Uh oh! We've hit a major runtime error. Kindly try again or " +
                                        "contact us at @gcfyouthlive for further support.\r\r ERR_CODE: "+this.status+''+this.responseText)
                                }
                                if (this.status === 201 ) {
                                    alert("Success! Check your E-mail for further instructions. See you in camp!");
                                    xhr.open('GET', endpoint+'pdf/generate');
                                    xhr.send();
                                    sleep(1000).then(() => {
                                        xhr.open('GET', endpoint+'emailer/send');
                                        xhr.send();
                                    })

                                }
                            }
                        });
                        xhr.open("POST", endpoint+"campers/");

                        xhr.send(formdata);
                    }
                    }
                    initialValues={
                        {
                            firstname: '',
                            lastname: '',
                            email: '',
                            contact: '',
                            sex: 'Male',
                            birthday: '',
                            school: '',
                            year: '1st Year',
                            emc_name: '',
                            emc_num: '',
                            emc_relation: 'Mother',
                            concerns: '',
                        }
                    }>
                {
                    ({
                         handleSubmit,
                         handleChange,
                         handleBlur,
                         values,
                         touched,
                         isValid,
                         errors,
                         isSubmitting
                     }) => (
                        <form onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} xs="12" sm={'6'} controlId="firstname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstname"
                                        value={values.firstname}
                                        onChange={handleChange}
                                        isInvalid={touched.firstname && !!errors.firstname}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstname}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs={'12'} sm={'6'} controlId="lastname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastname"
                                        value={values.lastname}
                                        onChange={handleChange}
                                        isInvalid={touched.lastname && !!errors.lastname}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastname}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} xs={'12'} sm={'6'} md={'4'} controlId='email'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type={'email'}
                                        placeholder={'email@example.com'}
                                        name={'email'}
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={touched.email && !!errors.email}
                                    />
                                </Form.Group>
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                                <Form.Group as={Col} xs={'12'} sm={'6'} md={'3'} controlId='contact'>
                                    <Form.Label>Contact Number</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">+63</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type={'text'}
                                            placeholder={'9xxxxxxxxx'}
                                            name={'contact'}
                                            value={values.contact}
                                            onChange={handleChange}
                                            isInvalid={touched.contact && !!errors.contact}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Control.Feedback type="invalid">
                                    {errors.contact}
                                </Form.Control.Feedback>
                                <Form.Group as={Col} xs={'12'} sm={'6'} md={'3'} controlId='birthday'>
                                    <Form.Label>Birthday</Form.Label>
                                    <Form.Control
                                        type='date'
                                        name={'birthday'}
                                        value={values.birthday}
                                        onChange={handleChange}
                                        isInvalid={touched.birthday && !!errors.birthday}
                                    />
                                </Form.Group>
                                <Form.Control.Feedback type="invalid">
                                    {errors.birthday}
                                </Form.Control.Feedback>
                                <Form.Group as={Col} xs={'12'} sm={'6'} md={'2'} controlId='sex'>
                                    <Form.Label>Sex</Form.Label>
                                    <Form.Control as={'Select'}
                                                  type='text'
                                                  name={'sex'}
                                                  value={values.sex}
                                                  onChange={handleChange}
                                                  isInvalid={touched.sex && !!errors.sex}
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Control.Feedback type="invalid">
                                    {errors.sex}
                                </Form.Control.Feedback>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} sm={'6'} md={'8'} controlId="school">
                                    <Form.Label>School</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="School"
                                        name="school"
                                        value={values.school}
                                        onChange={handleChange}
                                        isInvalid={touched.school && !!errors.school}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.school}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} sm={'6'} md={'4'} controlId="year">
                                    <Form.Label>Year Level</Form.Label>
                                    <Form.Control as={'select'}
                                                  name="year"
                                                  value={values.year}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.year}
                                    >
                                        <option>Grade 7</option>
                                        <option>Grade 8</option>
                                        <option>Grade 9</option>
                                        <option>Grade 10</option>
                                        <option>Grade 11</option>
                                        <option>Grade 12</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {touched.year && !!errors.year}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} xs={'12'}>
                                    <Dropdown.Divider as={Container}/>
                                    <Form.Label>Emergency Contact Info</Form.Label>
                                </Form.Group>
                                <Form.Group as={Col} xs={'12'} md={'4'}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type={'text'}
                                        name={'emc_name'}
                                        value={values.emc_name}
                                        onChange={handleChange}
                                        isInvalid={touched.emc_name && !!errors.emc_name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {touched.emc_name && !!errors.emc_name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs={'12'} md={'4'}>
                                    <Form.Label>Contact</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">+63</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type={'text'}
                                            name={'emc_num'}
                                            placeholder={'9xxxxxxxxx'}
                                            value={values.emc_num}
                                            onChange={handleChange}
                                            isInvalid={touched.emc_num && !!errors.emc_num}
                                        />
                                    </InputGroup>
                                    <Form.Control.Feedback type="invalid">
                                        {touched.emc_num && !!errors.emc_num}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs={'12'} md={'4'}>
                                    <Form.Label>Relation</Form.Label>
                                    <Form.Control as={'select'}
                                                  name="emc_relation"
                                                  value={values.emc_relation}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.emc_relation}
                                    >
                                        <option>Mother</option>
                                        <option>Father</option>
                                        <option>Guardian</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {touched.emc_relation && !!errors.emc_relation}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} xs={'12'}>
                                    <Dropdown.Divider as={Container}/>
                                    <Form.Label>Special Concerns</Form.Label>
                                    <Form.Control
                                        as={'textarea'}
                                        name={'concerns'}
                                        value={values.concerns}
                                        onChange={handleChange}
                                        isInvalid={touched.concerns && !!errors.concerns}
                                    />
                                </Form.Group>
                            </Form.Row>
                            {/*<Form.Group>*/}
                            {/*    <Form.Check*/}
                            {/*        required*/}
                            {/*        name="terms"*/}
                            {/*        label="I Agree to the terms and conditions"*/}
                            {/*        onChange={handleChange}*/}
                            {/*        isInvalid={!!errors.terms}*/}
                            {/*        feedback={errors.terms}*/}
                            {/*        id="validationFormik0"*/}
                            {/*    />*/}
                            {/*</Form.Group>*/}
                            <Button type="submit">Submit</Button>
                            {/*<pre>{JSON.stringify(values)}</pre>*/}
                        </form>
                    )
                }
            </Formik>
        );
    }
}
const RegForm = () => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }
            }
            initialValues={
                {
                    firstname: 'a',
                    lastname: 'a',
                    email: 'a@com.com',
                    contact: '123',
                    sex: '',
                    birthday: '2000-01-01',
                    school: 'asd',
                    year: '1st Year',
                    emc_name: '2',
                    emc_num: '2',
                    emc_relation: '',
                    concerns: '',
                }
            }>
                <Form onSubmit={values => {alert('submit') } }>
                    <label>Test</label>
                    <input type={'text'} name='firstname'/>
                    <button type='submit'>Submit</button>
                </Form>
        </Formik>
    )
}

export default function CampReg() {
    return (
        <div /*id={'form'}*/ className={' campreg-container'}>
            <Container fluid={false}>
                <RegForm2 /><br/>
            </Container>
        </div>
    );
}
