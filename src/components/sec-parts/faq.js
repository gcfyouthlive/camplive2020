import React from "react";
import './faq.css'

import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
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
export default function CampFaq() {
  return (
    <div className="campfaq-div">
      <h3 className={'align-left'}>Frequently Asked Questions</h3>
      <Accordion>
        {/*  <CustomAccordion eventKey="0"><label>&#187; Who can come to camp?</label></CustomAccordion>*/}
        {/*  <Accordion.Collapse eventKey="0">*/}
        {/*    <Container>*/}
        {/*      <Dropdown.Divider/>*/}
        {/*      <p>*/}
        {/*        Our high school camp is open to anyone incoming grade 7 to*/}
        {/*        incoming grade 12. If you are graduating grade 12 this year,*/}
        {/*        consider joining our college camp instead.*/}
        {/*      </p>*/}
        {/*      <Dropdown.Divider/>*/}
        {/*    </Container>*/}
        {/*  </Accordion.Collapse>*/}
        {/*<CustomAccordion eventKey="1"><label>&#187; What can I expect to happen during camp?</label></CustomAccordion>*/}
        {/*  <Accordion.Collapse eventKey="1">*/}
        {/*    <Container>*/}
        {/*      <Dropdown.Divider/>*/}
        {/*      <p>*/}
        {/*        CHANGE ME*/}
        {/*      </p>*/}
        {/*      <Dropdown.Divider/>*/}
        {/*    </Container>*/}
        {/*  </Accordion.Collapse>*/}
        <CustomAccordion eventKey="3"><label>&#187; What is a Y-Group?</label></CustomAccordion>
        <Accordion.Collapse eventKey="3">
          <Container>
            <Dropdown.Divider/>
            <p>
              Y-Group is short for Youth Group.
              It's a group of people who journey together in life with the Lord.
            </p>
            <Dropdown.Divider/>
          </Container>
        </Accordion.Collapse>
        <CustomAccordion eventKey="4"><label>&#187; Will I get to meet my Y-Group before camp?</label></CustomAccordion>
        <Accordion.Collapse eventKey="4">
          <Container>
            <Dropdown.Divider/>
            <p>
              Yes, we will have a pre-camp fellowship, where you can meet your fellow campers and camp leaders.
            </p>
            <Dropdown.Divider/>
          </Container>
        </Accordion.Collapse>
          <CustomAccordion eventKey="2"><label>&#187; What's included in the camp fee?</label></CustomAccordion>
          <Accordion.Collapse eventKey="2">
            <Container>
              <Dropdown.Divider/>
              <p>
                Food, lodging, and a souvenir camp shirt.
              </p>
              <Dropdown.Divider/>
            </Container>
          </Accordion.Collapse>
        <CustomAccordion eventKey="5"><label>&#187; What if I have more questions?</label></CustomAccordion>
        <Accordion.Collapse eventKey="5">
          <Container>
            <Dropdown.Divider/>
            <p>
              You can contact us via email at youthlive@gcf.org.ph or text us through +639175327741.
              You can also message us on our Instagram or Facebook accounts @gcfyouthlive
            </p>
            <Dropdown.Divider/>
          </Container>
        </Accordion.Collapse>
      </Accordion>
    </div>
  )
}
