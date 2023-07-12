// Utils
import { Link } from "react-router-dom";

// Components
import Music from "./Music";
import MapCard from "./MapCard";

// Styles
import "./Bento.scss";

// SVGs
import { ReactComponent as Ae } from "../../assets/stack/ae.svg";
import { ReactComponent as Figma } from "../../assets/stack/figma.svg";
import { ReactComponent as Framer } from "../../assets/stack/framer.svg";
import { ReactComponent as ReactIcon } from "../../assets/stack/react.svg";
import { ReactComponent as Spline } from "../../assets/stack/spline.svg";
import { ReactComponent as Webflow } from "../../assets/stack/webflow.svg";
import { ReactComponent as Wordpress } from "../../assets/stack/wordpress.svg";

const Bento = () => {
  return (
    <>
      <section className="bento">
        <div className="desc">
          <p>
            Je vous accompagne dans toutes les étapes de conception de votre projet, du{" "}
            <span>design</span> à <span>l’implémentation</span>, en passant par le{" "}
            <span>développement</span>.
          </p>
        </div>

        <div className="cards projects-music">
          <div className="cards-left">
            <div className="card halto">
              <div className="content">
                <img src="/assets/img/halto_icon.png" alt="Logo Halto" />
                <div className="text">
                  <h3>Halto</h3>
                  <p>Un space shooter 1v1 jouable dans le navigateur. </p>
                </div>
                <Link to="/projets/Halto" className="btn btn-primary">
                  Découvrir
                </Link>
              </div>
            </div>

            <Music />
          </div>

          <div className="card newgo">
            <img className="background" src="/assets/img/newgo_bg.png" />
            <div className="content">
              <img src="/assets/img/newgo_icon.png" alt="Logo Newgo" />
              <div className="text">
                <h3>Newgo</h3>
                <p>Un annuaire complet de l’écosystème gaming & esport.</p>
                <p>J’y suis actuellement en alternance, depuis octobre 2021.</p>
              </div>
              <Link to="/projets/Newgo" className="btn btn-primary">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>

        <div className="cards stack-projects">
          <div className="cards-left">
            <div className="card stack">
              <div className="content">
                <Figma />
                <Spline />
                <Ae />
                <ReactIcon />
                <Framer />
                <Webflow />
                <Wordpress />
              </div>
            </div>
            <MapCard />
          </div>

          <div className="card projects">
            <div className="content">
              <img src="/assets/img/list_icon.png" alt="Logo Halto" />
              <div className="text">
                <h3>Tous mes projets</h3>
                <p>Retrouvez tous mes autres projets juste ici.</p>
              </div>
              <Link to="/projets" className="btn btn-primary">
                Voir
              </Link>
            </div>
          </div>
        </div>

        <div className="cards spline-o">
          <div className="card spline">
            <iframe
              src="https://my.spline.design/interactionroom-3c9fdb6af347f26ac80cc8c6665c080e/"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Spline 3D"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default Bento;
