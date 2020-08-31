import React from "react";
import SocialLinks from "./SocialLinks";
import ContactCard from "../elements/ContactCard";
import texts from "../store/texts"

const Contact = () => (
  <section className="footer-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <h3><span>[</span> contact <span>]</span></h3>
          {texts.contactMessage}
        </div>

      </div>
      <div style={{margin: "0px auto"}} className="row banner">
      <div className="banner-text">
      <ContactCard />
      </div>
      <div className="banner-text">
      <SocialLinks />
      </div>
      </div>
  </section>
);

export default Contact;
