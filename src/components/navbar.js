import React from "react";
import "./navbar.css";

import { CampliveLogo } from "./logos";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><CampliveLogo /></li>
      </ul>
    </div>
  );
}
