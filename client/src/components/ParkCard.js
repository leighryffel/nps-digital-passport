import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
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
    <p id="park-list-activity" key={activity.id}>
      ⭐ {activity.name}
    </p>
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
        name: park.name,
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
        name: park.name,
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
    user_park.name === park.name ? true : false
  );

  const isOnBucketList = filteredBucketParks.map((bucket_list_park) =>
    bucket_list_park.name === park.name ? true : false
  );

  if (
    park.designation === "National Park" ||
    park.designation === "National Park & Preserve" ||
    park.designation === "National Park and Preserve" ||
    park.designation === "National and State Parks" ||
    park.designation === "National Parks" ||
    park.name === "National Park of American Samoa"
  ) {
    return (
      <Card id="park-browser-card">
        <CardMedia
          component="img"
          alt={park.fullName}
          image={park.images[0].url}
          height="250em"
        />
        <CardContent>
          {isStamped.includes(true) ? (
            <>
              <Typography id="park-text-title" variant="h5">
                {park.name}
              </Typography>
              <img
                alt="park stamp"
                style={{ float: "right" }}
                width="75px"
                src="https://i0.wp.com/americasnationalparks.org/wp-content/uploads/2019/10/Passport_Cancellation_Generic.jpg?resize=1000%2C600&ssl=1"
              />{" "}
            </>
          ) : (
            <Typography id="park-text-title" variant="h5">
              {park.name}
            </Typography>
          )}
          <Typography id="park-text-location">
            <strong>Located in:</strong> {park.states}
          </Typography>
          <Typography id="park-text-designation">
            <strong>Designation:</strong>{" "}
            {park.designation !== "" ? park.designation : "National Park"}
          </Typography>
          <Typography id="park-text-designation">
            <strong>Description:</strong> {park.description.slice(0, 200)}...
          </Typography>
        </CardContent>
        <CardActions id="park-card-toggles">
          <button id="park-list-activity-button" onClick={changeToggle}>
            {activityToggle ? "Hide Activities" : "View Activities"}
          </button>
          {isOnBucketList.includes(true) ? (
            <button id="park-list-in-bucket-button">
              On Your Bucket List!
            </button>
          ) : (
            <button
              id="park-list-add-bucket-button"
              onClick={handleBucketClick}
            >
              Add to Bucket List
            </button>
          )}
          {isStamped.includes(true) ? (
            <button id="park-list-in-passport-button">You've Visited!</button>
          ) : (
            <button
              id="park-list-add-passport-button"
              onClick={handleStampClick}
            >
              Stamp Passport
            </button>
          )}
        </CardActions>
        <CardContent>
          {activityToggle ? <div>{activityList} </div> : null}
        </CardContent>
      </Card>
    );
  }
}

export default ParkCard;
