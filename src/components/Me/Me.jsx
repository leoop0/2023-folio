// Utils

import { Link } from "react-router-dom";

// Styles
import "./Me.scss";

// SVGs
import { ReactComponent as Profile } from "../../assets/profile.svg";

const Me = (props) => {
  return (
    <Link to="/" className={`me ${props.display}`}>
      <Profile className="profile" />
      <div className="content">
        <p>léo frati</p>
        <span>Product Designer</span>
      </div>
    </Link>
  );
};
export default Me;
