import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

function ParkCard({ user, park }) {
  const [activityToggle, setActivityToggle] = useState(false);
  const [stampToggle, setStampToggle] = useState(true);
  const [bucketToggle, setBucketToggle] = useState(true);

  const activityList = park.activities.map((activity) => (
    <p key={activity.id}>{activity.name}</p>
  ));

  function changeToggle() {
    return setActivityToggle((activityToggle) => !activityToggle);
  }

  function handleBucketClick() {
    fetch("/user_parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: park.id,
        user_id: user.id,
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
    setBucketToggle(!bucketToggle);
  }

  function handleStampClick() {
    fetch("/user_parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: park.id,
        user_id: user.id,
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
    setStampToggle(!stampToggle);
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
          <Button onClick={handleBucketClick}>
            {bucketToggle ? "Add to Bucket List" : "Remove From Bucket List"}
          </Button>
          <Button onClick={handleStampClick}>
            {stampToggle ? "Stamp Passport" : "Remove Stamp"}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ParkCard;
