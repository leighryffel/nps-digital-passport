import React from "react";

function MapView() {
  return (
    <div id="map-container">
      <div id="map-test">
        <iframe
          id="map-frame"
          src="https://www.google.com/maps/d/embed?mid=1f4p3zPa1uU_gRnbQzMAqCZTPzD4&ehbc=2E312F"
          height="650"
          width="650"
          frameborder="0"
          alt="Park Map"
          title="NPS Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default MapView;
