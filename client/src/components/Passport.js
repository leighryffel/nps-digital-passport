import React, { useState, useEffect } from "react";
import PassportStamp from "./PassportStamp";
import { Grid } from "@mui/material";

function Passport({ user }) {
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
      park={userPark}
      key={userPark.id}
    />
  ));

  const image = (
    <img
      alt="park stamp"
      width="55px"
      src="https://i0.wp.com/americasnationalparks.org/wp-content/uploads/2019/10/Passport_Cancellation_Generic.jpg?resize=1000%2C600&ssl=1"
    />
  );

  return (
    <>
      <div id="passport-container" style={{ margin: "5em 0em 1em 1em" }}>
        <h1>
          {user.username.charAt(0).toUpperCase() + user.username.slice(1)}'s
          Stamps {image}
        </h1>
        {filteredUserParks.length > 0 ? (
          <h4>
            {filteredUserParks.length} {filteredUserParks.length > 1 ? "parks" : "park"} visited! Ready for your next trip?
          </h4>
        ) : null}
      </div>
      <div>
        <Grid container justifyContent="center">
          {stampList}
        </Grid>
      </div>
    </>
  );
}

export default Passport;
