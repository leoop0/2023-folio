// Utils

// Styles
import "./ClearSearch.scss";

// SVGs

// PNGs

const ClearSearch = ({ value, clearSearch }) => {
  return (
    <div className="clear-search">
      <div className="illustration">
        <img src="/assets/img/newgo_icon.png" alt="Newgo Logo" />
        <img src="/assets/img/halto_icon.png" alt="Halto Logo" />
        <img src="/assets/img/betclic_icon.png" alt="Betclic Logo" />
        <div className="btn btn-primary">
          <img src="/assets/icons/search.svg" alt="search-icon" />
        </div>
        <img src="/assets/img/doritos_icon.png" alt="Doritos Logo" />
        <img src="/assets/img/meyze_icon.png" alt="Meyze Logo" />
        <img src="/assets/img/choffee_icon.png" alt="Choffee Logo" />
      </div>
      <div className="content">
        <h2>Aucun projet trouvé</h2>
        <p>"{value}" n'est associé à aucun projet.</p>
        <div className="btn btn-primary" onClick={clearSearch}>
          Réinitialiser la recherche
        </div>
      </div>
    </div>
  );
};
export default ClearSearch;
