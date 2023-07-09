// Utils
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data
import projects from "../../utils/projects.json";

// Components
import Me from "../../components/Me/Me";

// Styles
import "./Project.scss";

const ProjectPage = () => {
  const { name } = useParams();

  const projet = projects.projects.find((project) => project.name === name);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="project-page">
      <Me />
      <div className="project-container">
        <div className="content">
          <div className="name-btn">
            <Link to="#" onClick={() => window.history.back()} className="back">
              Retour
            </Link>
            {/* <img src={projet.thumbnail} alt={projet.name} /> */}
            <div className="name">
              <h1>{projet.name}</h1>
              <a href={projet.url} className="btn btn-secondary" rel="noreferrer" target="_blank">
                {projet.btn}
              </a>
            </div>
          </div>
          <div className="tags">
            {projet.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <p>{projet.description}</p>
          <Slider {...carouselSettings}>
            {projet.carousel.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
