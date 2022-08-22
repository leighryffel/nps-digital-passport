import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapView() {
  return (
    <div className="google-maps">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1f4p3zPa1uU_gRnbQzMAqCZTPzD4&ehbc=2E312F"
        allowFullScreen=""
        loading="lazy"
        alt="Park Map"
        title="NPS Google Map"
      ></iframe>
      {/* <LoadScript googleMapsApiKey="AIzaSyB7EAf4vYzYRqnkiQcv5gFc8yGCnsH23ww">
        <GoogleMap
          mapContainerStyle={{
            width: "400px",
            height: "400px",
          }}
          center={{ lat: -3.745, lng: -38.523 }}
          zoom={10}
        ></GoogleMap>
      </LoadScript> */}
    </div>
  );
}

export default MapView;
