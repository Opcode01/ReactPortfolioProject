import React from 'react';
import PROJECTS from '../data/projects';

//Stateless functional component syntax
const Project = (props) => {
    const {title, image, description, link } = props.project;

    return(
        <div style={{width: 400, margin: 10}}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{width: 200, height: 120, margin: 10}}/>
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    );
}

//Stateless functional componenet with inline return - used when the component only has a return function
const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div style={{display:"inline-flex"}}>
        {
            PROJECTS.map((PROJECT) => (
                <Project key={PROJECT.id} project={PROJECT}/>
            ))             
        }
        </div>
    </div>
)

export default Projects;