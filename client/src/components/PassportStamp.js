import React from "react";
import { Card, Button } from "react-bootstrap";

function PassportStamp({ park }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{park.name}</Card.Title>
        <Card.Text>{park.description}</Card.Text>
        <Button>Log a Memory</Button>
      </Card.Body>
    </Card>
  );
}

export default PassportStamp;
