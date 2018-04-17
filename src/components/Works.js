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
            "Defined and coordinated the technical tasks for the development.",
            "Acted as a mentor and lead for the developers and",
            "Had strong technical skills and often develops the architecturally significant components of the software systems.",
            "Knew the status of the developer’s work and detect slippage",
            "Used a wide variety of open source technologies and tools",
            "Had experience with systems and IT operations",
            "Felt comfort with with frequent, incremental code testing and deployment",
            "Had strong grasp of automation tools","Had a strong focus on business outcomes",
            "Felt comfort with collaboration, open communication and reaching across functional borders",
            "Could handle the entire software development life cycle, end to end",
            "Met programming standards by following production, productivity, quality, and customer-service standards.",
            "Arranged program specifications by confirming logical sequence and flowcharts; researched and employed established operations.",
            "Used Scalable Design Patterns with full Lifecycle Ownership ",
            "Was strong influence in Product Direction"
        ]
    },
    {
        title: 'Android & Backend developer',
        company: 'Procontrol',
        interval:'Szeged, Jan 2013 - Jan 2015',
        url: 'http://www.procontrol.hu/en/',
        competences: ["",""]
    },
    {
        title: 'Embedded developer',
        company: 'Optin',
        interval:'Szeged, Sep 2012 - Dec 2012',
        url: 'https://optin.hu/en/',
        competences: ["",""]
    },
    {
        title: 'Trainee',
        company: 'Schmitt-Sky Lift',
        interval:'Boly, Jun 2012 - Aug 2012',
        url: 'https://www.schmitt-aufzuege.de',
        competences: ["",""]
    }
];

const Works = () => (
    <section className="works-section" id="works">
        <div className="container">
            <div className="works-header">
                <h3><span>[</span> works <span>]</span></h3>
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
