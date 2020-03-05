import React from "react";
import "./tagline.css";

import Container from "react-bootstrap/Container";

export default function CampTagline() {
  return (
    <Container className="tagline-container">
      <div className="tagline-text">
        We're not just looking for words from dictionaries or word-search puzzles.
        We're looking for <highlight-alt>the only Word that matters.</highlight-alt>
      </div>
    </Container>
  );
}
