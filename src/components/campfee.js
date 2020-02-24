import React from "react";
import "./campfee.css";

import Container from "react-bootstrap/Container";

export default function CampFee() {
  return (
    <Container>
      <div className="fee">
        Early Bird Fee (until April 19): <b>&#8369; 2,500.00</b>
      </div>
      <div className="fee">
        Regular Fee (until slots are filled):  <b>&#8369; 3,200.00</b>
      </div>
      <div className="payment-info">
        How to pay?
      </div>
    </Container>
  );
}
