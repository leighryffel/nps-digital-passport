import React from "react";
import ParkCard from "./ParkCard";

function ParksList({ user, parks, addParkToBucketList, addParkToStamps }) {
  return (
    <div>
      {parks.map((park) => (
        <ParkCard
          user={user}
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
