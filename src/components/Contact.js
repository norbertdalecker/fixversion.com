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
const mailaddress=<p>&#105;&#110;&#102;&#111;&#064;&#102;&#105;&#120;&#118;&#101;&#114;&#115;&#105;&#111;&#110;&#046;&#099;&#111;&#109;</p>;
const Contact = () => (
  <section className="footer-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <h3><span>[</span> contact <span>]</span></h3>
          <p>{mailaddress}This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. </p>
        </div>
        <div className="social-icon">
          <a href="#"><i className="icon1"></i></a>
          <a href="#"><i className="icon2"></i></a>
          <a href="#"><i className="icon3"></i></a>
          <a href="#"><i className="icon4"></i></a>
          <a href="#"><i className="icon5"></i></a>
          <a href="#"><i className="icon6"></i></a>
          <a href="#"><i className="icon7"></i></a>
          <a href="#"><i className="icon8"></i></a>
        </div>
      </div>
  </section>
);

export default Contact;
