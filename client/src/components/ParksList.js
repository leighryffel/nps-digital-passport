import React, { useState, useEffect } from "react";
import ParkCard from "./ParkCard";
import { Link } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TablePagination,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

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

  const overviewText =
    "Welcome to the National Parks Digital Passport App! Search for a park below using the activity drop down menu or search bar. Add a park to your Bucket List or stamp parks you've visited to add them to your passport.";

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

  const searchedParks = parks.filter((park) =>
    park.fullName.toLowerCase().includes(search.toLowerCase())
  );

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

  function handleMapClick() {
    console.log("View Map!");
  }

  return (
    <div className="parks-list">
      <Box className="park-list-photo-header"
        sx={{
          pt: 3,
          pb: 3,
        }}
      >
        <Container maxWidth="m">
          <Typography
            id="park-list-header"
            variant="h2"
            align="center"
            color="white"
            sx={{letterSpacing: 5}}
          >
            Visit America's National Parks
          </Typography>
        </Container>
      </Box>
      <Box
        id="parks-list-heading"
        sx={{
          bgcolor: "white",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="m">
          <Typography
            id="park-list-header"
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {overviewText}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
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
                <button
                  id="park-list-controls-button"
                  onClick={handleMapClick}
                  className="toggle-map-view"
                >
                  <strong>Switch to Map View</strong>
                </button>
              </Link>
            </div>
          </Stack>
        </Container>
      </Box>
      {filter === "View All" ? (
        <h2 className="selected-parks-header">All Parks</h2>
      ) : (
        <h2 className="selected-parks-header">Parks with {filter}</h2>
      )}
      <div>
        {filter === "View All" ? (
          <div className="parks-container-div">
            <Grid container justifyContent="center">
              {fullListToRender}
            </Grid>
          </div>
        ) : (
          <div className="parks-container-div">
            <Grid container justifyContent="center">
              {filteredListToRender}
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}

export default ParksList;
