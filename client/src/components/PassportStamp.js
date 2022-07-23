import React from "react";
import { Card, Button } from "react-bootstrap";

function PassportStamp({ park }) {
  function handleViewStamp() {
    console.log("Open This Park's Page");
  }

  return (
    <Card className="stamp-card">
      <Card.Body>
        <Card.Img className="stamp-image" onClick={handleViewStamp} src={park.image_url} />
        <Card.Title>{park.name}</Card.Title>
        <Button>See Memories</Button>
      </Card.Body>
    </Card>
  );
}

export default PassportStamp;
