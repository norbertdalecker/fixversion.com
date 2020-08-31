import React from "react";
import { FaChevronCircleUp } from "react-icons/fa";

const Footer = () => (
  <footer id="footer">
    <div style={{margin:"0px auto"}} className="row">
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
