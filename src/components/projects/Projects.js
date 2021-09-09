import React from 'react';
import "../../assets/styles/projects.css";
import "../../assets/styles/custom-styles.css";
import FeaturedProjects from "./FeaturedProjects";
import ProjectCards from "./ProjectCards";

function Projects() {
    return (
        <section>
            <div className="main-container" id="projects">
                <div className="container-header">
                    <h2><span className="title-number">02.</span> Projects</h2>
                </div>

                <FeaturedProjects />
                <ProjectCards />
                
            </div>
        </section>
    )
}

export default Projects;