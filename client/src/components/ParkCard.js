import React from "react";
import { useState } from "react";

function ParkCard({ park, addParkToBucketList, addParkToStamps }) {
  const [activityToggle, setActivityToggle] = useState(false);

  const activityList = park.activities.map((activity) => (
    <p key={activity.id}>{activity.name}</p>
  ));

  function changeToggle() {
    return setActivityToggle((activityToggle) => !activityToggle);
  }

  function handleBucketClick() {
    const newPark = {
      id: park.id,
      name: park.fullName,
      latitude: park.latitude,
      longitude: park.longitude,
      activities: park.activities,
      states: park.states,
      designation: park.designation,
      description: park.description,
      image_url: park.images[0].url,
    };
    fetch("/parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPark),
    });
    addParkToBucketList();
  }

  function handleStampClick() {
    const newPark = {
      id: park.id,
      name: park.fullName,
      latitude: park.latitude,
      longitude: park.longitude,
      activities: park.activities,
      states: park.states,
      designation: park.designation,
      description: park.description,
      image_url: park.images[0].url,
    };
    fetch("/parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPark),
    });
    addParkToStamps();
  }

  if (
    park.designation === "National Park" ||
    park.designation === "National and State Parks" ||
    park.designation === "National Parks" ||
    park.fullName === "National Park of American Samoa"
  ) {
    return (
      <div>
        <h1>{park.fullName}</h1>
        <img alt={park.fullName} src={park.images[0].url} />
        <h2>Located in: {park.states}</h2>
        <h3>Park Latitude: {park.latitude}</h3>
        <h3>Park Longitude: {park.longitude}</h3>
        <p>Designation: {park.designation}</p>
        <button onClick={changeToggle}>View Activities</button>
        {activityToggle ? <h4>Park Activities: {activityList}</h4> : null}
        <button onClick={handleBucketClick}>Add to Bucket List</button>
        <button onClick={handleStampClick}>Stamp Passport</button>
      </div>
    );
  }
}

export default ParkCard;
