// Components
import Bento from "../../components/Bento/Bento";
import Infos from "../../components/Infos/Infos";

// Utils
import { Helmet } from "react-helmet";

// Styles
import "./Home.scss";

function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Léo Frati - 2023 Folio</title>
        <meta
          name="description"
          content="Je suis un étudiant en 🎨 Design Graphique, spécialisé en UI/UX Design."
        />
      </Helmet>
      <Infos />
      <Bento />
    </div>
  );
}

export default Home;
