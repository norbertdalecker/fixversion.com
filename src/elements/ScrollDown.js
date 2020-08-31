import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";

const ScrollDown = (props) => (
  <p className="scrolldown">
    <a className="smoothscroll" href={props.target}>
      <FaChevronCircleDown />
    </a>
  </p>
);

export default ScrollDown;
