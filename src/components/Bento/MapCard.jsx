// Utils
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

// Styles
import "./Bento.scss";

// SVGs

const MapCard = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaGF3a3JpY2siLCJhIjoiY2xqdHltMzV3MHJxazNmbnVydjBpM280NSJ9.af34vzfsAU-wbfxbkjr3qA";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-0.5792);
  const [lat, setLat] = useState(44.8378);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/hawkrick/ckqm0dcs94swv17pm9z342cy5",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div className="card map">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
export default MapCard;
