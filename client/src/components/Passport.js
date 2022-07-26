import React, { useState, useEffect } from "react";
import PassportStamp from "./PassportStamp";
import { Grid } from "@mui/material";

function Passport({ user, selectedPark, setSelectedPark }) {
  const [userParks, setUserParks] = useState([]);

  useEffect(() => {
    fetch("/user_parks")
      .then((res) => res.json())
      .then(setUserParks);
  }, []);

  const filteredUserParks = userParks.filter(
    (park) => park.user.username === user.username
  );

  const stampList = filteredUserParks.map((userPark) => (
    <PassportStamp
      selectedPark={selectedPark}
      setSelectedPark={setSelectedPark}
      park={userPark}
      key={userPark.id}
    />
  ));

  return (
    <>
      <div className="passport-header">
        <h1>
          {user.username.charAt(0).toUpperCase() + user.username.slice(1)}'s
          Passport
        </h1>
      </div>
      <div className="passport-title">
        <h2>Your Stamps</h2>
      </div>
      <div className="stamp-list">
        <Grid container cols={3} item spacing={10}>
          {stampList}
        </Grid>
      </div>
    </>
  );
}

export default Passport;
