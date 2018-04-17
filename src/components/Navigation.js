import React from "react";

const Navigation = () => (
  
  <nav className="cl-effect-5" id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />   
    <ul id="nav" className="nav">
 
      <li className="active">
        <a className="smoothscroll active" href="#home">
          <span data-hover="Home">home</span>
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#services">
        <span data-hover="Services">services</span>
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
        <span data-hover="About">about</span>
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#works">
        <span data-hover="Experience">experience</span>
        </a>
      </li>      
      <li>
        <a className="smoothscroll" href="#contact">
        <span data-hover="Contact">contact</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
