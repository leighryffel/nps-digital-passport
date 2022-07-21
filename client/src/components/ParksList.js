import React from "react";
import ParkCard from "./ParkCard";

function ParksList({ parks, addParkToBucketList, addParkToStamps }) {
  return (
    <div>
      {parks.map((park) => (
        <ParkCard
          park={park}
          key={park.id}
          addParkToBucketList={addParkToBucketList}
          addParkToStamps={addParkToStamps}
        />
      ))}
    </div>
  );
}

export default ParksList;
