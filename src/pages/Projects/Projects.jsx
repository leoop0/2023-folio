// Utils
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Styles
import "./Projects.scss";

// SVGs
import { ReactComponent as Search } from "../../assets/ico/search.svg";

// JSON
import projects from "../../utils/projects.json";

// Components
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
    const { name, extract, tags } = project;
    const lowerCaseSearchValue = searchValue.toLowerCase();

    return (
      name.toLowerCase().includes(lowerCaseSearchValue) ||
      extract.toLowerCase().includes(lowerCaseSearchValue) ||
      tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchValue))
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
      <Helmet>
        <title>Léo Frati - Projets</title>
        <meta
          name="description"
          content="Une liste de mes différents projets, du Product Design à la Direction Artistique."
        />
      </Helmet>
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
          <div className="submit">
            <Search />
          </div>
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
