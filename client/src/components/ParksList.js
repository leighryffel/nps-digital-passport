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
  const [filter, setFilter] = useState("Auto and ATV");

  function handleDropDownClick(e) {
    setFilter(e.target.innerHTML);
    console.log(selectedParks);
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

  // let hasMagenicVendor = vendors.some((vendor) => vendor["Name"] === "Magenic");

  return (
    <div>
      <div className="park-list-header">
        <h1>View All National Parks</h1>
        <DropdownButton id="dropdown-basic-button" title="Filter by Activity">
          {activityDropDown}
        </DropdownButton>
        <Button href="/mapview">Switch to Map View</Button>
      </div>
      <Container>
        <Row>
          {selectedParks.map((park) => (
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
