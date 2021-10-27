import React, { useEffect, useState } from 'react';
import ProjectPreview from '../cards/ProjectPreview';
import ProjectProfile from '../cards/ProjectProfile';

export default function Projects() {
  const [projects, setProjects] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/emdevelop/google_sheets/VIEmPpnyABtVIhyK?tabId=myProjects`
      );
      const json = await response.json();
      console.log(json.data);
      setProjects(json.data);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    isLoaded && (
      <>
        <div className="projects-container">
          <h1 className="project-header">My Projects</h1>
          <div className="project-list">
            {projects.map((project) => {
              return (
                <ProjectPreview
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
            {/* <ProjectPreview
              name="VeganSwap"
              description="some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here "
              github="https://github.com/EMDevelop/veganswap"
              language="Javascript"
              image="https://raw.githubusercontent.com/EMDevelop/public_resources/main/gifs/veganswap/veganswap.gif"
              tools="React JS, Express JS, PostgreSQL"
              website="www.veganswap.co.uk"
            />
            <ProjectPreview
              name="VeganSwap"
              description="some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here "
              github="https://github.com/EMDevelop/veganswap"
              language="Javascript"
              image="https://raw.githubusercontent.com/EMDevelop/public_resources/main/gifs/veganswap/veganswap.gif"
              tools="React JS, Express JS, PostgreSQL"
              website="www.veganswap.co.uk"
            />
            <ProjectPreview
              name="VeganSwap"
              description="some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here "
              github="https://github.com/EMDevelop/veganswap"
              language="Javascript"
              image="https://raw.githubusercontent.com/EMDevelop/public_resources/main/gifs/veganswap/veganswap.gif"
              tools="React JS, Express JS, PostgreSQL"
              website="www.veganswap.co.uk"
            />
            <ProjectPreview
              name="VeganSwap"
              description="some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here "
              github="https://github.com/EMDevelop/veganswap"
              language="Javascript"
              image="https://raw.githubusercontent.com/EMDevelop/public_resources/main/gifs/veganswap/veganswap.gif"
              tools="React JS, Express JS, PostgreSQL"
              website="www.veganswap.co.uk"
            />
            <ProjectPreview
              name="VeganSwap"
              description="some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here "
              github="https://github.com/EMDevelop/veganswap"
              language="Javascript"
              image="https://raw.githubusercontent.com/EMDevelop/public_resources/main/gifs/veganswap/veganswap.gif"
              tools="React JS, Express JS, PostgreSQL"
              website="www.veganswap.co.uk"
            />
            <ProjectPreview
              name="VeganSwap"
              description="some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here "
              github="https://github.com/EMDevelop/veganswap"
              language="Javascript"
              image="https://raw.githubusercontent.com/EMDevelop/public_resources/main/gifs/veganswap/veganswap.gif"
              tools="React JS, Express JS, PostgreSQL"
              website="www.veganswap.co.uk"
            />
            <ProjectPreview
              name="VeganSwap"
              description="some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here "
              github="https://github.com/EMDevelop/veganswap"
              language="Javascript"
              image="https://raw.githubusercontent.com/EMDevelop/public_resources/main/gifs/veganswap/veganswap.gif"
              tools="React JS, Express JS, PostgreSQL"
              website="www.veganswap.co.uk"
            />
            <ProjectPreview
              name="VeganSwap"
              description="some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here "
              github="https://github.com/EMDevelop/veganswap"
              language="Javascript"
              image="https://raw.githubusercontent.com/EMDevelop/public_resources/main/gifs/veganswap/veganswap.gif"
              tools="React JS, Express JS, PostgreSQL"
              website="www.veganswap.co.uk"
            />
            <ProjectPreview
              name="VeganSwap"
              description="some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here some description here "
              github="https://github.com/EMDevelop/veganswap"
              language="Javascript"
              image="https://raw.githubusercontent.com/EMDevelop/public_resources/main/gifs/veganswap/veganswap.gif"
              tools="React JS, Express JS, PostgreSQL"
              website="www.veganswap.co.uk"
            /> */}
          </div>
        </div>
      </>
    )
  );
}
