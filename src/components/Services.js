import React from "react";
import ScrollDown from "../elements/ScrollDown";
import Slider from "react-slick";
import CustomArrow from "../elements/CustomArrow"


import texts from "../store/texts"
import devOpsPic from '../assets/images/devops.png'

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slideToShow: 3,
    slideToScroll: 1,
    swipeToSlide: true,
    centerMode: false,
    prevArrow: <CustomArrow />,
    nextArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1966,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


const Services = () => (
  <section id="services">

    <div className="services-section" id="services">

      <div className="container">
        <div className="services-header">
          <h3><span>[</span> services <span>]</span></h3>
          <div className="services-header photoPanel">
          <img src={devOpsPic} />
          </div>
          <strong className="services-title">What is DevOps?</strong>
          <p>" {texts.devOpsBio} " {texts.devOpsBioSource} </p>
         


        </div>
        <div className="services-sectiongrids">
        <Slider {...settings}>
          {texts.services.map(function(object, i){
            return <div key={i} className="col-md-4 services-grid">
                <div className="Icon">{object.icon}</div>
                <h4>{object.title}</h4>
                <p>{object.description}</p>
              </div>;
          })}
          </Slider>

        </div>
        <div className="services-sectiongrids">
        <div style={{paddingBottom: '20px'}} className="clearfix"></div>
          <ScrollDown target="#about"/>
          </div>
      </div>
    </div>
  </section>
);

export default Services;
