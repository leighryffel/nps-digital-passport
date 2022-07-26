import React, { useState, useEffect } from "react";
import ParkCard from "./ParkCard";
import { Link } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function ParksList({
  user,
  parks,
  addParkToBucketList,
  addParkToStamps,
}) {
  const [filter, setFilter] = useState("View All");
  const [userParks, setUserParks] = useState([]);
  const [userBucketList, setUserBucketList] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    fetch("/user_parks")
      .then((res) => res.json())
      .then((data) => setUserParks(data));
  }, [change]);

  useEffect(() => {
    fetch("/bucket_list_parks")
      .then((res) => res.json())
      .then((data) => setUserBucketList(data));
  }, [change]);

  function handleChange(e) {
    setFilter(e.target.value);
  }

  const activityArray = [
    "View All",
    "Arts and Culture",
    "Astronomy",
    "Auto and ATV",
    "Biking",
    "Boating",
    "Camping",
    "Canyoneering",
    "Caving",
    "Climbing",
    "Compass and GPS",
    "Dog Sledding",
    "Fishing",
    "Flying",
    "Food",
    "Golfing",
    "Guided Tours",
    "Hands-On",
    "Hiking",
    "Horse Trekking",
    "Hunting and Gathering",
    "Ice Skating",
    "Junior Ranger Program",
    "Living History",
    "Museum Exhibits",
    "Paddling",
    "Park Film",
    "Playground",
    "SCUBA Diving",
    "Shopping",
    "Skiing",
    "Snorkeling",
    "Snow Play",
    "Snowmobiling",
    "Snowshoeing",
    "Surfing",
    "Swimming",
    "Team Sports",
    "Tubing",
    "Water",
    "Wildlife Watching",
  ];

  const selectedParks = parks.filter((park) =>
    park.activities.some((activity) => activity["name"] === filter)
  );

  return (
    <div>
      <div className="park-list-header">
        <h1>View All National Parks</h1>
        <FormControl fullWidth>
          <InputLabel id="activity-select-label">Filter by Activity</InputLabel>
          <Select
            labelId="activity-select-label"
            id="activity-select"
            value={filter}
            label="Activity"
            onChange={handleChange}
          >
            {activityArray.map((activity, index) => (
              <MenuItem key={index} value={activity}>
                {activity}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Link to="/mapview">
          <Button>Switch to Map View</Button>
        </Link>
      </div>
      {filter === "View All" ? (
        <h3>All Parks</h3>
      ) : (
        <h3>Parks with {filter}</h3>
      )}
      <div>
        <div>
          {filter === "View All"
            ? parks.map((park) => (
                <ParkCard
                  user={user}
                  park={park}
                  key={park.id}
                  addParkToBucketList={addParkToBucketList}
                  addParkToStamps={addParkToStamps}
                  userParks={userParks}
                  userBucketList={userBucketList}
                  change={change}
                  setChange={setChange}
                />
              ))
            : selectedParks.map((park) => (
                <ParkCard
                  user={user}
                  park={park}
                  key={park.id}
                  addParkToBucketList={addParkToBucketList}
                  addParkToStamps={addParkToStamps}
                  userParks={userParks}
                  userBucketList={userBucketList}
                  change={change}
                  setChange={setChange}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default ParksList;
