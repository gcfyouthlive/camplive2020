import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

function CustomAccordion({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey);

  return (
    <div onClick={decoratedOnClick}>
      {children}
    </div>
  );
}
export default function CampFaq() {
  return (
    <Accordion>
      <div>
        <CustomAccordion eventKey="0">Test</CustomAccordion>
        <Accordion.Collapse eventKey="0">
          <div>TestBody</div>
        </Accordion.Collapse>
      </div>
      <div>
        <CustomAccordion eventKey="1">Test2</CustomAccordion>
        <Accordion.Collapse eventKey="1">
          <div>TestBody</div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  )
}
