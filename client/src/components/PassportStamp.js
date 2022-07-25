import React from "react";
// import { Card, Button } from "react-bootstrap";

function PassportStamp({ park }) {
  function handleViewStamp() {
    console.log("Open This Park's Page");
  }

  return (
    <div className="stamp-card">
      <div>
        <img className="stamp-image" onClick={handleViewStamp} src={park.image_url} />
        <h1>{park.name}</h1>
        <button>See Memories</button>
      </div>
    </div>
  );
}

export default PassportStamp;
