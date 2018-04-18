
import React from "react";
import {
    FaCogs,
    FaCodeFork,
    FaCloud,
    FaCubes,
    FaDesktop,
    FaSkype
  } from "react-icons/lib/fa";

const texts = {
    education: [
        {
            title: 'B.A. Degree in Engineering Information Technology',
            description: 'University of Szeged, Hungary, 2009 – 2013'
        },
        {
            title: 'High School Graduate',
            description: 'Lajos the great Grammar School of the Cistercian Order, Hungary, 2005 – 2009'
        },
    ],
    workplaces: [
        { 
            title: 'DevOps Engineer, Tech Lead',
            company: 'Precognox',
            interval:'Budapest, Feb 2015 - Apr 2018',
            url: 'https://www.precognox.com', 
            competences: [
                "I had to define and coordinate the technical tasks for the development, I was as a mentor and lead for the developers. I have knew the status of the developer’s work and detect slippage.",
                "I had strong technical skills and had to develop the architecturally significant components of the software systems.",
                "I used a wide variety of open source technologies and tools, and my experience with systems and IT operations. I have felt comfort with with frequent, incremental code testing and deployment, with collaboration, open communication and reaching across functional borders.",
                "I had strong grasp of automation tools and a strong focus on business outcomes. I have met programming standards by following production, productivity, quality, and customer-service standards. I have arranged program specifications by confirming logical sequence and flowcharts; researched and employed established operations.",
                "I used Scalable Design Patterns with full Lifecycle Ownership. I think that I was strong influence in Product Direction."
            ]
        },
        {
            title: 'Android & Backend developer',
            company: 'Procontrol',
            interval:'Szeged, Jan 2013 - Jan 2015',
            url: 'http://www.procontrol.hu/en/',
            competences: [
                "I worked on Android and .Net 4.0 desktop applications. From design to support, I participated in every part of development lifecycle. I had the opportunity to deal with real-time image processing, including neural networks.",
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
                "I worked on PLC and Scada controllers. I made maintenances in high voltage circuits and repaired elevators"
            ]
        }
    ],
    services: [
        {
            title: 'Research and planning',
            description: 'start scrolling',
            icon: <FaCogs />
        },
        {
            title: 'Application development',
            description: 'start scrolling',
            icon: <FaCodeFork />
        },
        {
            title: 'Platform development',
            description: 'start scrolling',
            icon: <FaCloud />
        },
        {
            title: 'CI/CD pipelines',
            description: 'start scrolling',
            icon: <FaCubes />
        },
        {
            title: 'Monitoring and alerting',
            description: 'start scrolling',
            icon: <FaDesktop />
        },
        {
            title: 'Support and consultation',
            description: 'start scrolling',
            icon: <FaSkype />
        }
    ],
    skills: [
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
      }),
      devOpsBio: "DevOps is not a technology or tool, it is a concept of behavior, and It is an extension of Agile Methodology. The DevOps is a set of practices designed to overcome the gap between development, QA and Operations by effective communication and collaboration, incorporating continuous integration process with automated deployment. DevOps helps to increase an organization's speed to deliver applications and services. It allows organizations to serve their customers better and compete more strongly in the market.",
      devOpsBioSource: <a href="https://www.quora.com/What-is-DevOps-What-are-the-duties-of-a-DevOps-Engineer"> ( source )</a>

};

export default texts;