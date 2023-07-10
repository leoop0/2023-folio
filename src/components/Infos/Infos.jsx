// Utils
import { Link } from "react-router-dom";

// Styles
import "./Infos.scss";

// Components
import EmailBtn from "../EmailBtn/EmailBtn";

// SVGs
import { ReactComponent as Profile } from "../../assets/profile.svg";

const Infos = () => {
  return (
    <>
      <section className="infos">
        <div className="bg">
          <img src="/assets/img/bg.svg" alt="" />
        </div>
        <div className="infos-container">
          {/* <img src="/assets/img/profile.webp" alt="Léo Frati" /> */}
          <Profile className="profile" />
          <div className="paragraph">
            <h1>léo frati</h1>
            <p>Je suis un étudiant en 🎨 Design Graphique, spécialisé en UI/UX Design.</p>
          </div>
          <div className="disp">
            <div className="indicator"></div>
            <span>Disponible pour une mission</span>
          </div>
          <div className="btns-container">
            <Link to="/projets" className="btn btn-primary">
              Tous mes projets
            </Link>
            <EmailBtn />
          </div>
        </div>
      </section>
    </>
  );
};
export default Infos;
