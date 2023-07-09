// Components
import Bento from "../../components/Bento/Bento";
import Infos from "../../components/Infos/Infos";

// Styles
import "./Home.scss";

function Home() {
  return (
    <div className="home-page">
      <Infos />
      <Bento />
    </div>
  );
}

export default Home;
