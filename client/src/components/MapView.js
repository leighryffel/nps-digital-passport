import React from "react";
import Wrapper from "@googlemaps/react-wrapper";

function MapView() {
  return (
    <div>
      <h1>Map View</h1>
      <div className="map-container">
        <img alt="map of parks" src="map.png" />
      </div>
    </div>
  );
}

export default MapView;
