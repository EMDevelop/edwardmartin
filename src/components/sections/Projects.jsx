import React, { useEffect, useState } from 'react';
import ProjectPreview from '../cards/ProjectPreview';
import Loading from '../Loading';
import projectsList from '../../data/projectsList';

export default function Projects() {
  let projectIndex = 0;

  const incrementIndexByOne = () => {
    projectIndex += 1;
  };

  return (
    <div className="projects-container">
      <h1 className="project-header">My Projects</h1>
      <div className="project-list">
        {projectsList.map((project) => {
          incrementIndexByOne();
          return (
            <ProjectPreview
              key={projectIndex}
              name={project.name}
              image={project.image}
              description={project.description}
              github={project.github}
              language={project.language}
              website={project.website}
              tools={project.tools}
            />
          );
        })}
      </div>
    </div>
  );
}
