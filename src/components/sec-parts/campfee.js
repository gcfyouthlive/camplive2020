import React from "react";
import "./campfee.css";

import { Accordion, Container } from "react-bootstrap"
import { useAccordionToggle } from "react-bootstrap/AccordionToggle"
import Dropdown from "react-bootstrap/Dropdown";

function CustomAccordion({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey);

  return (
    <div onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

export default function CampFee() {
  return (
    <Container className="campfee-container">
      <h2>Camp Fees</h2>
      <div className="fee">&#8369; 2,500.00</div>
      <div className="date">Until April 19</div>

      <div className="fee">&#8369; 3,200.00</div>
      <div className="date">Regular Fee</div>
    </Container>
  );
}
/*
      <div className="fee">
        Early Bird Fee (until April 19): <b>&#8369; 2,500.00</b>
      </div>
      <div className="fee">
        Regular Fee:  <b>&#8369; 3,200.00</b>
      </div>
      <div className="payment-info">
        <Accordion>
          <CustomAccordion eventKey="0"><label>&#187; How to pay?</label></CustomAccordion>
          <Accordion.Collapse eventKey="0">
            <Container>
              <Dropdown.Divider/>
              <p>
                Simply approach our CampLIVE Booth at the GCF Lobby every Sunday.
                Don't forget to present your confirmation slip (Printed or Digital) when you pay!
              </p>
            </Container>
          </Accordion.Collapse>
        </Accordion>
      </div>
    </Container>
  );
}*/
