import React from "react";
import ScrollDown from "../elements/ScrollDown";

const education = [
    {
        title: 'B.A. Degree in Engineering Information Technology',
        description: 'University of Szeged, Hungary, 2009 – 2013'
    },
    {
        title: 'High School Graduate',
        description: 'Lajos the great Grammar School of the Cistercian Order, Hungary, 2005 – 2009'
    },
];
const workplaces = [
    { 
        title: 'DevOps Engineer, Tech Lead',
        company: 'Precognox',
        interval:'Budapest, Feb 2015 - Apr 2018',
        url: 'https://www.precognox.com', 
        competences: [
            "I had to define and coordinate the technical tasks for the development, I was as a mentor and lead for the developers. I have knew the status of the developer’s work and detect slippage.",
            "I had strong technical skills and had to develop the architecturally significant components of the software systems.",
            "I used a wide variety of open source technologies and tools, and my experience with systems and IT operations. I have felt comfort with with frequent, incremental code testing and deployment, with collaboration, open communication and reaching across functional borders.",
            "I have had strong grasp of automation tools and a strong focus on business outcomes. I have met programming standards by following production, productivity, quality, and customer-service standards. I have arranged program specifications by confirming logical sequence and flowcharts; researched and employed established operations.",
            "I used Scalable Design Patterns with full Lifecycle Ownership. I think that I was strong influence in Product Direction."
        ]
    },
    {
        title: 'Android & Backend developer',
        company: 'Procontrol',
        interval:'Szeged, Jan 2013 - Jan 2015',
        url: 'http://www.procontrol.hu/en/',
        competences: [
            "I mainly worked on developing Android and .Net 4.0 desktop applications. From design to support, I participated in every part of development lifecycle. I had the opportunity to deal with real-time image processing, including neural networks.",
            "I was first, second and third level support. I was a contact and helped clients solve their problems. Before discussing potential developments, I talked with to the customer and turned the wishes to the technical requirements.",
            "I worked with distributed and enterprise systems too. I worked on access control systems, solar panel controllers and classic service backends.",
        ]
    },
    {
        title: 'Embedded developer',
        company: 'Optin',
        interval:'Szeged, Sep 2012 - Dec 2012',
        url: 'https://optin.hu/en/',
        competences: ["In a two-man team, we have developed a test software for easy hardware periphery checking for mass production of an ARM based fleet tracking system."]
    },
    {
        title: 'Trainee',
        company: 'Schmitt-Sky Lift',
        interval:'Boly, Jun 2012 - Aug 2012',
        url: 'https://www.schmitt-aufzuege.de',
        competences: [
            "I had to work PLC and Scada controllers. I made maintenances in high voltage circuits and repaired elevators"
        ]
    }
];

const Works = () => (
    <section className="works-section" id="works">
        <div className="container">
            <div className="works-header">
                <h3><span>[</span> experience <span>]</span></h3>
            </div>
        </div>
        <div className="row education">
            <div className="five columns header-col">
                <h1>
                    <span>Work Experience</span>
                </h1>
            </div>
            <div className="seven columns main-col">
            {workplaces.map(function(object, i){
            return <div key={i} className="row item">
                    <div className="twelve columns">
                        <h4>{object.title}</h4>
                        <p className="info">
                            <strong>
                                <a href={object.url}><span style={{fontWeight: "bold"}}> @{object.company}</span></a>, {object.interval}
                            </strong>
                        </p>
                        <p className="info">
                        <ul style={{listStyleType: "none"}}>
                        {object.competences.map(function(competence, j){
                            return   <li key={j}className="list-group-item">{competence}</li>
                        })}
                        </ul>
                        </p>
                        <hr/>
                    </div>
                </div>;
            })}
            </div>
        </div>    
    
        <div className="row education">
            <div className="five columns header-col">
                <h1>
                    <span>Education</span>
                </h1>
            </div>
            <div className="seven columns main-col">
            {education.map(function(object, i){
            return <div key={i} className="row item">
                    <div className="twelve columns">
                        <h4>{object.title}</h4>
                        <p className="info">
                        {object.description}
                        </p>
                    </div>
                </div>;
            })}
            </div>
        </div>
        <ScrollDown target="#contact" />
    </section>

);

export default Works;
