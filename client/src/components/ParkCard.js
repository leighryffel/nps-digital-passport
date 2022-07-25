import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ParkCard({ user, park }) {
  const [activityToggle, setActivityToggle] = useState(false);
  const [stampToggle, setStampToggle] = useState(true);
  const [bucketToggle, setBucketToggle] = useState(true);

  const activityList = park.activities.map((activity) => (
    <p key={activity.id}>⭐ {activity.name}</p>
  ));

  function changeToggle() {
    return setActivityToggle((activityToggle) => !activityToggle);
  }

  // THIS IS STILL NOT WORKING
  function handleBucketClick() {
    fetch("/bucket_list_parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: park.id,
        bucket_list_id: user.bucket_list.id,
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

  // THIS WORKS BUT DOESN'T LET YOU REMOVE A STAMP NOR DOES THE BUTTON CHANGE PERSIST
  function handleStampClick() {
    const newId = park.id + user.id;
    fetch("/user_parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: newId,
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
      <Card className="park-list-card" style={{ width: "20rem" }}>
        <CardMedia
          component="img"
          alt={park.fullName}
          image={park.images[0].url}
        />
        <CardContent>
          <Typography variant="h5">{park.fullName}</Typography>
          <Typography>Located in: {park.states}</Typography>
          <Typography>Designation: {park.designation}</Typography>
          <Button className="park-card-button" onClick={changeToggle}>
            View Activities
          </Button>
          {activityToggle ? <Typography>{activityList} </Typography> : null}
          <Button className="park-card-button" onClick={handleBucketClick}>
            {bucketToggle ? "Add to Bucket List" : "Remove From Bucket List"}
          </Button>
          <Button className="park-card-button" onClick={handleStampClick}>
            {stampToggle ? "Stamp Passport" : "Remove Stamp"}
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default ParkCard;
