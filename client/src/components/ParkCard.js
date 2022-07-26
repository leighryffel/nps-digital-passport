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
    <p key={activity.id}>⭐ {activity.name}</p>
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
      <Card className="park-view-card" sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          alt={park.fullName}
          image={park.images[0].url}
          height="250em"
        />
        <CardContent>
          <Typography variant="h5">{park.fullName}</Typography>
          <Typography>Located in: {park.states}</Typography>
          <Typography>Designation: {park.designation}</Typography>
          {activityToggle ? <Typography>{activityList} </Typography> : null}
        </CardContent>

        <CardActions>
          <Button className="park-card-button" onClick={changeToggle}>
            View Activities
          </Button>
          {isOnBucketList.includes(true) ? (
            <Button className="park-card-button">On Your Bucket List!</Button>
          ) : (
            <Button className="park-card-button" onClick={handleBucketClick}>
              Add to Bucket List
            </Button>
          )}
          {isStamped.includes(true) ? (
            <Button className="park-card-button">You've Visited!</Button>
          ) : (
            <Button className="park-card-button" onClick={handleStampClick}>
              Stamp Passport
            </Button>
          )}
        </CardActions>
      </Card>
    );
  }
}

export default ParkCard;
