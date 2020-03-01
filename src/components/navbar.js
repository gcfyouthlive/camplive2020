import React from "react";
import "./navbar.css";
//Components
import { CampliveLogo } from "./logos";

// function NavbarMenu(props) {
//   return (
//     <div>
//       <Container fluid={true}>
//         <Row>
//           <Col></Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

//        <li><CampliveLogo /></li>

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><CampliveLogo /></li>
      </ul>
    </div>
  );
}
