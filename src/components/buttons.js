import React from "react";
import "./buttons.css";

import Button from "react-bootstrap/Button";
//
// export function CallToAction() {
//   return (
//     <Button className="call-to-action">Find out more</Button>
//   );
// }
//
// export function FindOutMoreButton() {
//   return (
//     <Button className="call-to-action">Find out more</Button>
//   );
// }
// export function RegisterButton() {
//   return (
//     <Button className="call-to-action">Register Now</Button>
//   );
// }

export default function ButtonCTA(props) {
  return (
      <Button href={props.href} className={'call-to-action'}>{props.text}</Button>
  )
}
