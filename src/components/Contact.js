import React from "react";
import Slider from "react-slick";
const settings = {
  // dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true
};
import texts from "../store/texts"
const mailaddress=<p>&#105;&#110;&#102;&#111;&#064;&#102;&#105;&#120;&#118;&#101;&#114;&#115;&#105;&#111;&#110;&#046;&#099;&#111;&#109;</p>;

const Contact = () => (
  <section className="footer-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <h3><span>[</span> contact <span>]</span></h3>
          {texts.contactMessage}
        </div>
       
      </div>
  </section>
);

export default Contact;
