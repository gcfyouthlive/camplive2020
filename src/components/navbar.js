import React from "react";
import "./navbar.css";
<<<<<<< HEAD

=======
//Components
>>>>>>> master
import { CampliveLogo } from "./logos";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


<<<<<<< HEAD
=======
function NavbarMenu(props) {
  return (
    <div>
      <Container fluid={true}>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

//        <li><CampliveLogo /></li>
>>>>>>> master
export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><CampliveLogo /></li>
      </ul>
    </div>
  );
}
