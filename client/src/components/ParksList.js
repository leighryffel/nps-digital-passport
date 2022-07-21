import React from "react";
import ParkCard from "./ParkCard";

function ParksList({ parks, parksArray }) {
  
  Object.values(parks).forEach((park) => {
    parksArray.push(park);
  });

  return (
    <div>
      {parksArray.map((park) => (
        <ParkCard park={park} key={park.id} />
      ))}
    </div>
  );
}

export default ParksList;
