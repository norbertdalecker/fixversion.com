import React from "react";
import profilepic from "../assets/images/profilepic.jpg";
import ScrollDown from "../elements/ScrollDown";

const skills = [
  {name: "Java", years: 5},
  {name: "Groovy", years: 3},
  {name: "Javascript", years: 7},
  {name: "jQuery", years: 3},
  {name: "ReactJs", years: 2},
  {name: "Angular (1/4)", years: 1},
  {name: "Android", years: 2},
  {name: "SQL/MSSQL", years: 7},
  {name: "Electron", years: 0.5},
  {name: "Docker", years: 3},
  {name: "Node.js", years: 2},
  {name: "Rancher", years: 2},
  {name: "Jenkins", years: 3},
  {name: "TrasvisCI", years: 1},
  {name: "Datadog", years: 3},
  {name: "Prometheus w/ Grafana", years: 1},
  {name: "Ansible", years: 3},
  {name: "Kubernetes", years: 0.5},
  {name: "Keycloak", years: 2},
  {name: "Aws", years: 2},
  {name: "Azure", years: 0.5},
  {name: "Haproxy/Nginx/Apache", years: 6},
  {name: "Wildfly", years: 3},
  {name: "Jetty", years: 3},
  {name: "C#", years: 2},
  {name: "php", years: 2}
].sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

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
          {skills.slice(0, Math.ceil(skills.length / 2)).map(function(object, i){
            return generateExperienceRow(object,i);
          })}
        </div>
        <div className="col-md-6 about-rightgrid">
          {skills.slice(Math.ceil(skills.length / 2)).map(function(object, i){
            return generateExperienceRow(object,i);
          })}
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
    <ScrollDown target="#works"/>
  </section>
);

export default About;
