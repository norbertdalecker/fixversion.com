import React from "react";
import ReactPlayer from 'react-player'

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "../elements/ScrollDown";

const Header = () => (
  <header className="headertop" id="home">
    <ReactPlayer 
      url='https://youtu.be/s5QNE_Lugo8'
      muted
      loop
      playing
      width="1920px"
      height="1080px"
      style={{
        position: "absolute",
        top: "0px",
        zIndex: -99}}
    />

    <div className="headertopoverlay" >
    <Navigation />
    <Banner />
    <ScrollDown target="#services"/>
    </div>
  </header>
);

export default Header;
