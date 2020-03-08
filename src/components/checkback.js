import React from 'react'
import "./registration.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function CheckBack () {
    return (
        <div /*id={'form'}*/ className={' campreg-container'}>
            <Container fluid={false}>
                <p>Hey there! We're just making changes to our backend. Check back in an hour!<br/>
                    In the meantime, why not follow us on our social media accounts? @gcfyouthlive</p><br/>
            </Container>
        </div>
    )
}
