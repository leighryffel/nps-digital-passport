import React, { useState } from "react";

function PassportStamp({ park }) {
  const [selectedPark, setSelectedPark] = useState("");

  function handleViewStamp() {
    setSelectedPark(park.name);
    console.log(selectedPark);
  }

  return (
    <div className="stamp-card">
      <div>
        <img
          className="stamp-image"
          onClick={handleViewStamp}
          src={park.image_url}
        />
        <h1>{park.name}</h1>
        <button onClick={handleViewStamp}>See Memories</button>
      </div>
    </div>
  );
}

export default PassportStamp;
