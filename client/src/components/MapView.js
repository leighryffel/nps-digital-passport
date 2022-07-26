import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function MapView() {
  return (
    <div style={{ margin: "5em 0em 0em 1em" }}>
      <h1>Map View</h1>
      <Link to="/">
        <button id="toggle-list-view">Switch to List View</button>
      </Link>
      <div>
        <iframe
          title="NPS Google Map"
          src="https://www.google.com/maps/d/embed?mid=1f4p3zPa1uU_gRnbQzMAqCZTPzD4&ehbc=2E312F"
          width="640"
          height="480"
          alt="Park Map"
        ></iframe>
      </div>
    </div>
  );
}

export default MapView;
