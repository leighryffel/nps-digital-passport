import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ParkCard({ user, park }) {
  const [activityToggle, setActivityToggle] = useState(false);
  const [stampToggle, setStampToggle] = useState(true);
  const [bucketToggle, setBucketToggle] = useState(true);
  // const [userParks, setUserParks] = useState([]);
  // const [userBucketList, setUserBucketList] = useState([]);

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
    }).then(setStampToggle(!stampToggle));
  }

  // const isStamped = user.user_parks.some(
  //   (user_park) => user_park.fullName === park.name
  // );

  if (
    park.designation === "National Park" ||
    park.designation === "National and State Parks" ||
    park.designation === "National Parks" ||
    park.fullName === "National Park of American Samoa"
  ) {
    return (
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          alt={park.fullName}
          image={park.images[0].url}
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
          <Button className="park-card-button" onClick={handleBucketClick}>
            {bucketToggle ? "Add to Bucket List" : "Remove From Bucket List"}
          </Button>
          <Button className="park-card-button" onClick={handleStampClick}>
            {stampToggle ? "Stamp Passport" : "Remove Stamp"}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ParkCard;
