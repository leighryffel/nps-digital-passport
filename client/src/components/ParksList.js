import React, { useState } from "react";
import ParkCard from "./ParkCard";
import {
  Dropdown,
  DropdownButton,
  Button,
  Container,
  Row,
} from "react-bootstrap";

function ParksList({ user, parks, addParkToBucketList, addParkToStamps }) {
  const [filter, setFilter] = useState("View All");

  function handleDropDownClick(e) {
    setFilter(e.target.innerHTML);
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

  const activityDropDown = activityArray.map((activity, index) => (
    <Dropdown.Item key={index} onClick={handleDropDownClick}>
      {activity}
    </Dropdown.Item>
  ));

  const selectedParks = parks.filter((park) =>
    park.activities.some((activity) => activity["name"] === filter)
  );

  return (
    <div>
      <div className="park-list-header">
        <h1>View All National Parks</h1>
        <DropdownButton
          // style={{ maxHeight: "28px" }}
          id="dropdown-basic-button"
          title="Filter by Activity"
        >
          {activityDropDown}
        </DropdownButton>
        <Button href="/mapview">Switch to Map View</Button>
      </div>
      {filter === "View All" ? (
        <h3>All Parks</h3>
      ) : (
        <h3>Parks with {filter}</h3>
      )}
      <Container>
        <Row>
          {filter === "View All"
            ? parks.map((park) => (
                <ParkCard
                  user={user}
                  park={park}
                  key={park.id}
                  addParkToBucketList={addParkToBucketList}
                  addParkToStamps={addParkToStamps}
                />
              ))
            : selectedParks.map((park) => (
                <ParkCard
                  user={user}
                  park={park}
                  key={park.id}
                  addParkToBucketList={addParkToBucketList}
                  addParkToStamps={addParkToStamps}
                />
              ))}
        </Row>
      </Container>
    </div>
  );
}

export default ParksList;
