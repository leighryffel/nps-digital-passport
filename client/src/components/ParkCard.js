import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ParkCard({
  user,
  park,
  change,
  setChange,
  userParks,
  userBucketList,
}) {
  const [activityToggle, setActivityToggle] = useState(false);
  const [stampToggle, setStampToggle] = useState(true);
  const [bucketToggle, setBucketToggle] = useState(true);

  const activityList = park.activities.map((activity) => (
    <p id="park-list-activity" key={activity.id}>⭐ {activity.name}</p>
  ));

  function changeToggle() {
    return setActivityToggle((activityToggle) => !activityToggle);
  }

  function handleBucketClick() {
    const newId = park.id + user.id;
    fetch("/bucket_list_parks", {
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
    })
      .then(setChange(!change))
      .then(setBucketToggle(!bucketToggle));
  }

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
    })
      .then(setChange(!change))
      .then(setStampToggle(!stampToggle));
  }

  const filteredUserParks = userParks.filter(
    (park) => park.user.username === user.username
  );

  const filteredBucketParks = userBucketList.filter(
    (park) => park.user.username === user.username
  );

  const isStamped = filteredUserParks.map((user_park) =>
    user_park.name === park.fullName ? true : false
  );

  const isOnBucketList = filteredBucketParks.map((bucket_list_park) =>
    bucket_list_park.name === park.fullName ? true : false
  );

  if (
    park.designation === "National Park" ||
    park.designation === "National and State Parks" ||
    park.designation === "National Parks" ||
    park.fullName === "National Park of American Samoa"
  ) {
    return (
      <Card sx={{ maxWidth: 400, margin: "1em 1em 1em 1em" }}>
        <CardMedia
          component="img"
          alt={park.fullName}
          image={park.images[0].url}
          height="250em"
        />
        <CardContent>
          <Typography id="park-text-title" variant="h5">
            {park.fullName}
          </Typography>
          <Typography id="park-text-location">
            Located in: {park.states}
          </Typography>
          <Typography id="park-text-designation">
            Designation: {park.designation}
          </Typography>
          {activityToggle ? (
            <Typography id="park-text-activites">{activityList} </Typography>
          ) : null}
        </CardContent>

        <CardActions>
          <Button id="park-list-activity-button" onClick={changeToggle}>
            {activityToggle ? "Hide Activities" : "View Activities"}
          </Button>
          {isOnBucketList.includes(true) ? (
            <Button id="park-list-in-bucket-button">On Your Bucket List!</Button>
          ) : (
            <Button id="park-list-add-bucket-button" onClick={handleBucketClick}>
              Add to Bucket List
            </Button>
          )}
          {isStamped.includes(true) ? (
            <Button id="park-list-in-passport-button">You've Visited!</Button>
          ) : (
            <Button id="park-list-add-passport-button" onClick={handleStampClick}>
              Stamp Passport
            </Button>
          )}
        </CardActions>
      </Card>
    );
  }
}

export default ParkCard;
