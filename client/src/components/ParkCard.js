import React from "react";
import { useState } from "react";

function ParkCard({ park }) {
  const [toggle, setToggle] = useState(false);

  const activityList = park.activities.map((activity) => (
    <p key={activity.id}>{activity.name}</p>
  ));

  function changeToggle() {
    return setToggle((toggle) => !toggle);
  }

  if (
    park.designation == "National Park" ||
    park.designation == "National and State Parks" ||
    park.designation == "National Parks" ||
    park.fullName == "National Park of American Samoa"
  ) {
    return (
      <div>
        <h1>{park.fullName}</h1>
        <img alt={park.fullName} src={park.images[0].url}/>
        {/* park.images[0].url */}
        <h2>Located in: {park.states}</h2>
        <h3>Park Latitude: {park.latitude}</h3>
        <h3>Park Longitude: {park.longitude}</h3>
        <p>Designation: {park.designation}</p>
        <button onClick={changeToggle}>View Activities</button>
        {toggle ? <h4>Park Activities: {activityList}</h4> : null}
      </div>
    );
  }
}

export default ParkCard;
