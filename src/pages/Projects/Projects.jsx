import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Styles
import "./Projects.scss";

// JSON
import projects from "../../utils/projects.json";
import ClearSearch from "../../components/ClearSearch/ClearSearch";
import Me from "../../components/Me/Me";

function Projects() {
  const [searchValue, setSearchValue] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const projectsPageRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredProjects = projects.projects.filter((project) => {
    const { name, extract } = project;
    const lowerCaseSearchValue = searchValue.toLowerCase();

    return (
      name.toLowerCase().includes(lowerCaseSearchValue) ||
      extract.toLowerCase().includes(lowerCaseSearchValue)
    );
  });

  const clearSearch = () => {
    setSearchValue("");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (projectsPageRef.current && projectsPageRef.current.scrollTop > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    if (projectsPageRef.current) {
      projectsPageRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (projectsPageRef.current) {
        projectsPageRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="projects-page" ref={projectsPageRef}>
      <Me />
      <div className={`search-container ${isSticky ? "sticky" : ""}`}>
        <h1>Projets</h1>
        <div className={`searchbar ${isSticky ? "sticky" : ""}`}>
          <input
            type="text"
            placeholder="Rechercher un projet"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <input type="image" src="/assets/icons/search.svg" alt="Rechercher" />
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div className="project" key={project.name}>
                <div className="content">
                  <img src={project.thumbnail} alt={project.name} />
                  <div className="text">
                    <h3>{project.name}</h3>
                    <p>{project.extract}</p>
                  </div>
                </div>
                <Link to={`/projets/${project.name}`} className="btn btn-primary">
                  Voir
                </Link>
              </div>
            ))
          ) : (
            <ClearSearch value={searchValue} clearSearch={clearSearch} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
