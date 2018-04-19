
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
            description: 'Nagy Lajos High school of the Cistercian Order, Hungary, 2005 – 2009'
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
            description: <p>Prototyping, finding solutions for complex problems, evaluation, validation.</p>,
            icon: <FaCogs />
        },
        {
            title: 'Application development',
            description: <p>Classical software development, <a className="smoothscroll" href="#competences">check my competences.</a></p>,
            icon: <FaCodeFork />
        },
        {
            title: 'Platform development',
            description: <p>IaaS, operations in cloud ecosystem, infrastructure automation.</p>,
            icon: <FaCloud />
        },
        {
            title: 'CI/CD pipelines',
            description: <p>Design, create, refact continous integration and delivery solutions.</p>,
            icon: <FaCubes />
        },
        {
            title: 'Monitoring and alerting',
            description: <p>Design, implement, renew, maintenance in different technological stacks.</p>,
            icon: <FaDesktop />
        },
        {
            title: 'Support and consultation',
            description: <p>Feel free to call me if you just need a hint or a different view.</p>,
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
        {name: "Elastic-Logstash-Kibana stack", years: 2},
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
      devOpsBioSource: <a href="https://www.quora.com/What-is-DevOps-What-are-the-duties-of-a-DevOps-Engineer"> ( source )</a>,
      devOpsWhy: <p>Today 'DevOps' is a buzzword but it is undeniably true that a great DevOps engineer is seriously a game changer. 
          When you work with a DevOps engineer, you ensure that the system is running smoothly and being monitored, so that you can respond to issues as it arises. 
          You ensure that your developers are never doing repetitive tasks, and the infrastructure is kept up to date as the stack evolves. As the processes change and the company grows, 
          the DevOps engineer automates as much as possible to accelerate work. 
          Because of DevOps, developers can focus on their core work so you can deliver products earlier and more reliably.
          <br/><br/>
          These are the areas where I can support the work of your teams:
          <br/>
          </p>,
      devOpsContact: "Now that you know what I've done and what I could do for you, feel free to reach out and start a conversation. I always enjoy speaking with passionate business owners about their needs.",
      contactMessage:<p> <strong>I’m currently available for freelance work. </strong> <br/>
       Feel free to reach out to me if you have any questions or comments about the services I offer. If you have a project that you want to get started or if you would like to just send me a friendly hello, then get in touch.</p>,
      aboutMessage: <p>
          <b> My name is Norbert Dalecker </b>. <br/> 
          I'm an engineer who wants to transform his passion for technology into real value for other people.
          My personal goal in life is not only to fix things but to make them better ones.
          <br/>
          In the last 5 years I have been striving to know all aspects of a real product. From business analysis, design through implementation, delivery and support.
          I was a backend developer (Java, C#, php) and used very large databases (MSSQL, and SQL Azure), mobile developer (Android until 4.4), frontend developer (jQuery w/ bootstrap, Angular, React, D3, Highcharts), system operator (lxc, hyperV, datadog, sensu, prometheus, newrelic, sematext), devops engineer (ansible, docker, vagrant, chef, rancher, kubernetes, AWS, jenkins, travis, gocd, circleci, sonarqube, gradle etc.) 
          <br/>
          I'm a DevOps engineer with many technical knowledge and experience. My primary domains are: infrastructure automation, integration of different types of systems, make and maintain distributed systems.
          I'm the person in a software project who not only “code” but gain the operations knowledge needed to support the application in production.
          
          </p>,
      bannerMessage: <h3>
            I'm a  <span>full stack developer</span>, 
            <span> devops engineer</span> and <span>full-time learner</span>. I follow the trends and make awesome solutions in software development.
             Let's learn more
            <a className="smoothscroll" href="#about">
                {" "}
                about me
            </a> and 
            <a className="smoothscroll" href="#services">
                {" "}
                build something amazing together
            </a>{" "}.
        </h3>,
        mailaddress: "&#105;&#110;&#102;&#111;&#064;&#102;&#105;&#120;&#118;&#101;&#114;&#115;&#105;&#111;&#110;&#046;&#099;&#111;&#109;",
        mailAdd: function(){
            var user = "norbertdalecker";
            var domain = "fixversion.com"
            return user+"@"+domain;
        }

};

export default texts;