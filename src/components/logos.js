import React from "react";
import "./logos.css";

import camplive_logo_white from "../svg/camplive-white.svg";
import camplive_logo_black from "../svg/camplive-black.svg";
import word_logo_white from "../svg/word-nolive-white.svg";
import word_logo_black from "../img/word-logo.png";

export function CampliveLogo(props) {
    const src = (props.color === "white") ? camplive_logo_white : camplive_logo_black;
    return (
        <img className="camplive-logo" style={props.style} src={src} alt="camplive_logo" />
    );
}

export function WordLogo(props) {
    const src = (props.color === "white") ? word_logo_white : word_logo_black;
    return (
        <img className="word-logo" src={src} alt="word_logo" />
    );
}
