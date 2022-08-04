import React from "react";

function MapView() {
  return (
    <div className="google-maps">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1f4p3zPa1uU_gRnbQzMAqCZTPzD4&ehbc=2E312F"
        allowfullscreen=""
        loading="lazy"
        alt="Park Map"
        title="NPS Google Map"
      ></iframe>
    </div>
  );
}

export default MapView;
