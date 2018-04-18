import React from "react";
import SocialLinks from "./SocialLinks";
import texts from "../store/texts"

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Be creative</h1>
      {texts.bannerMessage}
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
