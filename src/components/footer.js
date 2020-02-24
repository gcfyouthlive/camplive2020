import React from "react";
import './footer.css';

import Container from "react-bootstrap/Container";
import yl from "../svg/youthlive-white.svg"

export default function Footer() {
  return (
    <div className="footer">
      <Container fluid={true}>
        <span>
          <img src={yl} className="yl-logo" alt="YouthLIVE"></img>
          <p style={{fontSize: 10 + 'px'}}>Made with &lt;3 by @montanohanz & @joshuagad<br />(c) 2020</p>
        </span>
      </Container>
    </div>
  );
}
