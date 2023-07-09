// Utils

import { Link } from "react-router-dom";

// Styles
import "./Me.scss";

const Me = () => {
  return (
    <Link to="/" className="me">
      <img src="/assets/img/profile.webp" alt="Léo Frati" />
      <div className="content">
        <p>Léo Frati</p>
        <span>Product Designer</span>
      </div>
    </Link>
  );
};
export default Me;
