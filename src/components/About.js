import React from "react";
import profilepic from "../assets/images/profilepic.jpg";
import ScrollDown from "../elements/ScrollDown";

import texts from "../store/texts";

function generateExperienceString(years) {
  return (years > 5 ? "5+" : (years < 1 ? "less than a" : years))+(years> 1 ? " years" : " year");
};

function generateExperienceRow(object,i) {
  return <div key={i} className="polls">
    <div className="poll">
      <div className="poll-desc">
        <h4>{object.name}</h4>
      </div>
      <div className="percentage">
        <p>{generateExperienceString(object.years)}</p>
      </div>
      <div className="clearfix"></div>
    </div>
    <div className="skills">
      <div style={{ width: Math.min(100, object.years / 5 * 100) + "%" }} > </div>
    </div>
  </div>;
};

const About = () => (
  <section className="about-section" id="about">
    <div className="container">
      <div className="about-header">
        <h3><span>[</span> about <span>]</span></h3>
        <div className="about-imag">
          <img src={profilepic} alt="" />
        </div>
        <div className="about-text">
          <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
          <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. . </p>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="about-sectiongrids">
        <h4>Experience with tools and technologies</h4>
        <div className="col-md-6 about-leftgrid">
          {texts.skills.slice(0, Math.ceil(texts.skills.length / 2)).map(function(object, i){
            return generateExperienceRow(object,i);
          })}
        </div>
        <div className="col-md-6 about-rightgrid">
          {texts.skills.slice(Math.ceil(texts.skills.length / 2)).map(function(object, i){
            return generateExperienceRow(object,i);
          })}
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  </section>
);

export default About;
