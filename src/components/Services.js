import React from "react";
import ScrollDown from "../elements/ScrollDown";
import Slider from "react-slick";
import CustomArrow from "../elements/CustomArrow"
import {
  FaCogs,
  FaCodeFork,
  FaCloud,
  FaCubes,
  FaDesktop,
  FaSkype
} from "react-icons/lib/fa";

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

  const services = [
    {title: 'Research and planning', description: 'start scrolling', icon: <FaCogs />},
    {title: 'Application development', description: 'start scrolling', icon: <FaCodeFork />},
    {title: 'Platform development', description: 'start scrolling', icon: <FaCloud />},
    {title: 'CI/CD pipelines', description: 'start scrolling', icon: <FaCubes />},
    {title: 'Monitoring and alerting', description: 'start scrolling', icon: <FaDesktop />},
    {title: 'Support and consultation', description: 'start scrolling', icon: <FaSkype />}
  ];
const Services = () => (
  <section id="services">

    <div className="services-section" id="services">

      <div className="container">
        <div className="services-header">
          <h3><span>[</span> services <span>]</span></h3>
          <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. </p>
          <div className="services-header photoPanel">
          <img src={devOpsPic} />
        </div>
        </div>
        <div className="services-sectiongrids">
        <Slider {...settings}>
          {services.map(function(object, i){
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
