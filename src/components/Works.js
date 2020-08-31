import React from "react";

import texts from "../store/texts"

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
            {texts.workplaces.map(function(object, i){
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
                            return   <li key={j} className="list-group-item">{competence}</li>
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
            {texts.education.map(function(object, i){
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
    </section>

);

export default Works;
