import React from "react";
import ParkCard from "./ParkCard";
import { Container, Row } from "react-bootstrap";

function ParksList({ user, parks, addParkToBucketList, addParkToStamps }) {
  return (
    <div>
      <Container>
        <Row>
          {parks.map((park) => (
            <ParkCard
              user={user}
              park={park}
              key={park.id}
              addParkToBucketList={addParkToBucketList}
              addParkToStamps={addParkToStamps}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ParksList;
