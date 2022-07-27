import React, { useState, useEffect } from "react";
import ParkCard from "./ParkCard";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid";

function ParksList({ user, parks, addParkToBucketList, addParkToStamps }) {
  const [filter, setFilter] = useState("View All");
  const [userParks, setUserParks] = useState([]);
  const [userBucketList, setUserBucketList] = useState([]);
  const [change, setChange] = useState(false);
  const [search, setSearch] = useState("");

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

  const searchedParks = parks.filter((park) => park.fullName.includes(search));

  const selectedParks = searchedParks.filter((park) =>
    park.activities.some((activity) => activity["name"] === filter)
  );

  const filteredListToRender = selectedParks.map((park) => (
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
  ));

  const fullListToRender = searchedParks.map((park) => (
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
  ));

  return (
    <div className="parks-list">
      <div className="park-list-controls">
        <h3 className="app-instructions-header">
          View All National Parks! Search for a park below using the activity
          drop down or search bar. Add a park to your Bucket List or stamp parks
          you've visited to add them to your passport.
        </h3>
        <div className="park-list-togglers">
          <FormControl style={{ width: "20em" }}>
            <InputLabel id="activity-select-label">Filter</InputLabel>
            <Select
              labelId="activity-select-label"
              id="activity-select"
              value={filter}
              label="Activity"
              onChange={handleChange}
            >
              {activityArray.map((activity, index) => (
                <MenuItem id="activity-item" key={index} value={activity}>
                  {activity}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <form className="search-bar">
            <input
              id="search-bar"
              placeholder="Search by name..."
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <Link to="/mapview">
            <button className="toggle-map-view">
              <strong>Switch to Map View</strong>
            </button>
          </Link>
        </div>
      </div>
      {filter === "View All" ? (
        <h3>All Parks</h3>
      ) : (
        <h3>Parks with {filter}</h3>
      )}
      <div>
        <div>
          {filter === "View All" ? (
            <div>
              <Grid container spacing={1}>
                {fullListToRender}
              </Grid>
            </div>
          ) : (
            <div>
              <Grid container spacing={1}>
                {filteredListToRender}
              </Grid>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ParksList;
