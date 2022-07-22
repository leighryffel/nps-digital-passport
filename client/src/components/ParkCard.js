import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

function ParkCard({ user, park }) {
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
    console.log(newPark)
    fetch("/parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPark),
    });
    // fetch("/bucket_list_parks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ user_id: user.id, park_id: park.id }),
    // });
    // addParkToBucketList();
  }

  function handleStampClick() {
    fetch("/parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: park.id,
        name: park.fullName,
        latitude: park.latitude,
        longitude: park.longitude,
        activities: park.activities,
        states: park.states,
        designation: park.designation,
        description: park.description,
        image_url: park.images[0].url,
      }),
    });
    // fetch("/user_parks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ park_id: park.id, user_id: user.id }),
    // });
  }

  if (
    park.designation === "National Park" ||
    park.designation === "National and State Parks" ||
    park.designation === "National Parks" ||
    park.fullName === "National Park of American Samoa"
  ) {
    return (
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="left" alt={park.fullName} src={park.images[0].url} />
        <Card.Body>
          <Card.Title>{park.fullName}</Card.Title>
          <Card.Text>Located in: {park.states}</Card.Text>
          <p>Park Latitude: {park.latitude}</p>
          <Card.Text>Park Longitude: {park.longitude}</Card.Text>
          <Card.Text>Designation: {park.designation}</Card.Text>
          <Button onClick={changeToggle}>View Activities</Button>
          {activityToggle ? <h4>Park Activities: {activityList}</h4> : null}
          <Button onClick={handleBucketClick}>Add to Bucket List</Button>
          <Button onClick={handleStampClick}>Stamp Passport</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ParkCard;
